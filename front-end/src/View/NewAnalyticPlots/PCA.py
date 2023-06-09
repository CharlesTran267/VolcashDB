# -*- coding: utf-8 -*-
"""PCA.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1d-z-vOUZzDNWfoB_zMugCnrQDh63qhkU
"""

# Commented out IPython magic to ensure Python compatibility.
# Mount gdrive before running this cell
# %cd /content/drive/Othercomputers/My iMac/Desktop/leica_MF/codes

# !pip install mycolorpy
# !pip install pca
# !pip install scikit-image==0.19.3

# Commented out IPython magic to ensure Python compatibility.
import os, random
import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns
import lightgbm as lgb

import imagesize
import plotly.express as px

import matplotlib.image as mpimg
# %matplotlib inline
import matplotlib as mpl
import io
from flask import Flask, send_file, make_response,Response
mpl.rcParams['figure.dpi'] = 300
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
import sklearn
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from sklearn.decomposition import PCA  
from sklearn.mixture import GaussianMixture  
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score, GridSearchCV
from sklearn.model_selection import LeaveOneOut
from sklearn.utils import column_or_1d
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder

from pca import pca

from helper import *

cwd = '/content/drive/Othercomputers/My iMac/Desktop/leica_MF'
# os.chdir(cwd)
# if not os.path.exists('./results'):
# 	os.mkdir('./results')

# mf = pd.read_csv('./results/qia2.csv', index_col = 0)

mf = pd.read_csv('/Users/vinhkhaitruong/Downloads/Volcanic-Ash-App-master-2/front-end/src/View/NewAnalyticPlots/PCA/qia_relabeled (2).csv', index_col = 0)
mf = mf.loc[mf.index.notna()] # to remove the embedded headers between samples
mf.index = mf.index.astype(str)
print(mf.columns)
mf.loc[:,'convexity':'value_mode'] = mf.loc[:,'convexity':'value_mode'].astype(float, errors = 'raise')

# adds relevant fields such as volcano name, magma composition, etc.
mf = add_basic_volcano_info(mf, True)

df = mf.copy() # -> to keep an unchanged cop

#df.to_csv('./dataset_process_results/df_processed2.csv')

from sklearn.preprocessing import StandardScaler
target = 'Eruptive style'
classes2keep = ['Juvenile']

df_all, Xs, Y_num, Y_label = prepare_Xs_and_Ys(df, 'convexity', 'value_mode', target,
                                        balance_dataset = True,
                                        outlier = False,
                                        rescale_dataset = False,
                                        filter_column = 'Main type',
                                        classes2keep = classes2keep,
                                        volcano = None)

scaler = StandardScaler()
scaler.fit(Xs)
Xs = pd.DataFrame(scaler.fit_transform(Xs),columns = Xs.columns)
juvenile = Xs.copy()
juvenile['Y_label'] = Y_label.values
# juvenile.to_csv('./pca/only_juveniles_target_as_eruptive_styles.csv')

# Initialize
model = pca(normalize=False, n_components=10)
# print(Y_label.values)
# Fit transform and include the column labels and row labels
results = model.fit_transform(Xs.values, col_labels=df.loc[:,'convexity':'value_mode'].columns, row_labels=Y_label.values)
# print(Xs.values)
# print(Xs.values[1])
# print(Xs.values[2])
# Scatter plot with loadings

# print(df.loc[:,'convexity':'value_mode'])
# print(results)
PCA1 = []
PCA2 = []

# for i in range(len(results)):
#     if results.loc[:,'PC'][i] == 'PC1':
#         PCA1.append(results.loc[:,'PC'][i])

print(results['PC']['PC1'])
print(results['PC']['PC2'])
pca1, ax = model.biplot(alpha_transparency=0.5)
# fig.savefig('./pca/biplot.svg')

# This is to save the data in csv files, but only pd.dfs! 
l = ['loadings', 'PC', 'explained_var', 'variance_ratio', 'model', 'scaler', 'pcp', 'topfeat', 'outliers', 'outliers_params']
# for i in l:
#   x = model.results.get(i)
#   if isinstance(x, pd.DataFrame):
    # x.to_csv(f'./pca/{i}.csv')
  # else:print(x)

# Plot the explained variance
fig, ax = model.plot()
# fig.savefig('./pca/explained_variance.svg')

# importing the modules
from IPython.display import display
df2 = model.results['topfeat']
# df2.to_csv('./pca/loading.csv')

fig1, ax = model.scatter(PC = [0,1], alpha_transparency=0.8)
fig1.set_size_inches(10, 10)
# print(pca)
# print(fig1)
# fig.savefig('./pca/scatter_pc0_pc1.svg')

fig2, ax = model.scatter(PC = [0,2], title = '', alpha_transparency=0.8)
fig2.set_size_inches(10, 5)
# fig.savefig('./pca/scatter_pc0_pc2.svg')

# Make plot with parameters: set cmap to None and label and legend to False. Only directions will be plotted.
fig3, ax =model.biplot(cmap=None, label=False, legend=False, title='')
fig3.set_size_inches(8, 4)
# fig.savefig('./pca/arrows.svg')

output = io.BytesIO()
FigureCanvas(fig1).print_png(output)
#model.biplot3d()
app = Flask(__name__)

print(fig)

@app.route('/plots', methods=['GET'])
def correlation_matrix():
    # bytes_obj = do_plot()
    return {'pca1':results['PC']['PC1'],'pca2':results['PC']['PC2']}

if __name__ == '__main__':
    app.run(host='localhost',port='5000')
    