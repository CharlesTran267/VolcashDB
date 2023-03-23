import React from 'react';
import Plot from 'react-plotly.js';

const pca1 =[-2.031627095237405,
	-1.871852474181814,
	-4.1621656475211735,
	-5.420528212818966,
	-4.460293681364548,
	-6.875567184605708,
	-0.01009786378884649,
	-5.115039352988357,
	-1.4663244869753878,
	-6.519580048560095,
	1.28660148441657,
	-2.7282496253987363,
	-2.3509364796865206,
	-4.789749331149196,
	-5.634503721343545,
	-1.1143832523234694,
	-1.7103816998603751,
	-7.072443062346255,
	-2.783470497250627,
	-4.505180657202844,
	-2.9763211206729543,
	-3.664634095586423,
	-4.761509011566347,
	-4.232177441757142,
	-2.527459998543952,
	-5.1527777357929265,
	-2.7526035104506907,
	-3.1622741935311356,
	-6.028043609407972,
	-3.5220189937907116,
	-1.587563507004186,
	-3.0967341068737193,
	-2.4342321181787234,
	-2.6523391614302096,
	-5.524724192347863,
	-5.485394504671148,
	-2.8721966189605346,
	-4.714290020793345,
	-4.1315532497958944,
	-2.044456251202027,
	-5.054172809326663,
	-2.158284278179912,
	-5.008059980634307,
	0.8297490577810447,
	-3.29700133956995,
	-5.616916335078144,
	-6.346507433551248,
	-5.696965116590611,
	-4.186585650299342,
	-5.97678973110463,
	-4.159979793136929,
	-2.883032472444363,
	-3.850292980409134,
	-4.8711667985743405,
	-5.916579166400288,
	-4.686087596381834,
	-3.04591110471781,
	-1.1062816012692984,
	-2.4844694377269576,
	-3.4376497715921364,
	-4.670972111966428,
	-2.700380560558257,
	-4.019835388172889,
	-2.428576622016373,
	-4.47284371590102,
	-4.100988616701128,
	-4.852409969118322,
	-4.011241792681435,
	-4.561236137305945,
	-4.922004128196647,
	-3.894654066760361,
	-3.789329921707289,
	-4.42952650861691,
	-5.756964705545085,
	-4.086865305229469,
	-6.631955408530514,
	-1.4511916981550832,
	-2.3926448955556032,
	-3.958500771311978,
	-4.990537403734159,
	-2.451399535442409,
	-3.3582386905361434,
	-3.422889868351358,
	-4.6991337127409745,
	-3.2251035278290576,
	-5.532217640487372,
	-3.315215821176334,
	-5.85020301159271,
	-3.856015522102361,
	-5.6135528512686435,
	-3.6789302429130926,
	-2.881365514980255,
	-4.078171860979872,
	-4.388923252096849,
	-5.455218354676628,
	-3.9941266012348686,
	-5.091273465767734,
	-4.5350742804276205,
	-4.040840028283112,
	-4.509508035780526,
	-3.230693888435522,
	-4.214326007531989,
	-3.957595163881781,
	-3.4835679673572746,
	-4.70240314912419,
	-5.978660127650305,
	-3.428204044647823,
	-6.174827770462147,
	-3.9755815839269393,
	-5.58617754519744,
	0.11221762261563994,
	-2.5567152378028206,
	-4.4904183196762,
	-2.727720237750198,
	-4.478971260449472,
	-0.13856545195672046,
	-4.29807588864699,
	-2.910999830355278,
	-1.5714916580908955,
	-4.776125724348185,
	-3.218315327969204,
	-2.7644419382266974,
	-3.982123128431719,
	-2.286868654068925,
	-3.665556116383194,
	-3.219805172987624,
	-3.4133147940955197,
	-3.7364222033910135,
	-4.232968990187876,
	-4.116540274336241,
	-1.878310191997297,
	-3.4538995852429153,
	-2.997829563596199,
	-3.8617160393492997,
	-0.42178006303010324,
	-4.15190535464578,
	-2.7766674423502873,
	-2.315218809030361,
	-2.315218809030361,
	-4.53011950004746,
	-2.9229813278361476,
	-1.7307996160321146,
	-2.8875261361803197,
	-0.2963865680674205,
	-3.790124785661999,
	-3.6828895472371976,
	-3.1464627054341276,
	-3.4770667336872156,
	-3.958853620274798,
	-3.348384874319398,
	-2.8442402831906723,
	-1.9549727815119091,
	-3.9140298079798237,
	-3.1131387659629013,
	-2.9936851050964997,
	-4.103023065011639,
	-2.950167103291705,
	-2.6071809894149953,
	-3.2134172111383084,
	-1.7501552311580797,
	-3.273180028392255,
	-3.2473172322967683,
	-1.2330769736728375,
	-4.509275222592981,
	-3.037448443841378,
	-2.6820684208602095,
	-4.733904375982242,
	-1.4247698756649572,
	-3.1268056895217775,
	-2.873260065334692,
	-3.4019379304904045,
	-3.3221963262744953,
	-2.7849513474247765,
	-2.579257818315104,
	0.2971073114924757,
	-3.107416976982259,
	-1.9972518055562491,
	-1.5211979476682302,
	-4.19169419544647,
	-3.118969785912444,
	-3.869227893390341,
	-2.8100557121448335,
	-3.5382326869614746,
	-3.498119959601677,
	-2.516388795904789,
	-3.1659639410599625,
	-4.3591079046177565,
	-3.3935716801320517,
	-3.848219315436385,
	-3.1973294697304575,
	-4.519932854186497,
	-2.85182247618411,
	-2.9850766042620935,
	-3.708889251764607,
	-2.500121157079317,
	-3.228162347624983,
	-3.265681130978189,
	-2.7840818301637724,
	-3.60127233663682,
	-3.0934326086117854,
	-3.788843872481784,
	-1.881336422438519,
	-3.989616155891784,
	-2.9284131999598135,
	-3.096378369522742,
	-3.7956698520697674,
	-0.28144151791032335,
	-4.587892442908723,
	-2.4684840908982966,
	-2.4405276437171737,
	-1.3904918860847093,
	-2.701390216505512,
	-3.347391008601486,
	-4.250667420148384,
	-2.4800412421291322,
	-4.137920794286001,
	-2.0362336087335757,
	-4.653643021105179,
	-4.406580541552613,
	-3.176665487213439,
	1.662201415830397,
	-2.480121829787994,
	4.869103357393102,
	0.2969657503339167,
	2.997703879814022,
	2.835321193287778,
	4.285736030206652,
	-1.4589112471388177,
	-0.6926743277664491,
	3.2816869562111997,
	2.6774665848243675,
	5.074745668762256,
	4.895041417559389,
	-0.12655725019238798,
	1.1828145075067393,
	-2.8969731889945116,
	-0.7279865556073832,
	3.488792521372182,
	0.7839110826536045,
	0.36440157823327807,
	0.32896514670490257,
	5.322639768707431,
	3.896270688462086,
	-0.7491122869776,
	5.038757514594146,
	1.449601576093766,
	-1.53164780616366,
	0.46386543713977063,
	1.2034896723565789,
	2.2176649579303267,
	2.409068847728196,
	-2.0757943401750283,
	0.8067502429173654,
	2.256953366273467,
	0.26874194330434187,
	3.302448459111373,
	2.032165604215005,
	2.806373416343323,
	1.4253289915979581,
	-0.9355806997307496,
	-3.519851503672419,
	-2.4247123589131165,
	-1.594992887316561,
	-2.175955102506617,
	2.7983144172204817,
	0.3348411524496295,
	-0.2879596141918467,
	0.5094110252747595,
	0.388615878378437,
	0.5062745903286542,
	2.207139386288364,
	5.473104048371903,
	3.5198690199609923,
	-0.5502403006298758,
	-4.165724565682157,
	6.07633105034044,
	1.8360684711469295,
	-1.4656574369332427,
	5.457474812286001,
	2.4803857204876167,
	2.730113954608853,
	0.33795385989807647,
	1.0630465585169335,
	4.564189975217751,
	2.1431534242620867,
	0.19236389382872143,
	1.1565729320889764,
	2.0504386917866477,
	-0.2746107432238522,
	3.609427997088799,
	-1.1372921611301807,
	0.8750397153951579,
	1.824498205941204,
	-2.3948523496904994,
	-0.581468923261159,
	0.7805569300096862,
	0.2954950607402819,
	3.9018169952330686,
	3.9724520333419644,
	0.9961854294158184,
	-0.9315003355444629,
	2.1074287851854288,
	4.286912558692645,
	2.271246560003738,
	0.499382619189321,
	-0.6169506684305306,
	0.26600408941662973,
	6.025000529757484,
	-3.1381191475263637,
	5.424644644047933,
	-2.1808470026520412,
	0.513125472116587,
	-0.3818552177960539,
	0.027418089611244208,
	-0.33716429026623057,
	-1.3684965404906522,
	0.8662002098796736,
	4.837653924543011,
	2.070344274534148,
	1.3957359932575037,
	-0.6892828422786398,
	3.0201846816693,
	0.7483269055971762,
	4.237654410664708,
	0.9013884936951164,
	4.214941467185977,
	-0.30094554112515504,
	0.8852473164250443,
	0.7208096850809506,
	-1.4081472642827,
	5.9834047293467565,
	6.19310345361501,
	6.098266270641775,
	7.464636326370107,
	5.868104041927757,
	3.908792868205207,
	4.806742675451924,
	4.523290383972798,
	7.4688911395912605,
	5.160313936329665,
	5.553847258399089,
	4.689569513440624,
	6.744250199200358,
	6.055905337504971,
	5.3485239857826565,
	5.492942816661682,
	5.312063576102339,
	5.169221182374216,
	5.674449977982855,
	5.043493634498629,
	5.607593128990797,
	6.918061559907824,
	5.722642036766353,
	4.6383723539018655,
	5.167847983470708,
	5.4972702128660975,
	5.998525940267833,
	5.776860039619238,
	6.000408717742064,
	2.3137468886024757,
	6.3098856559134635,
	4.534011429746874,
	4.609811532361614,
	5.121263828847949,
	5.449654263012131,
	4.319358816676558,
	5.923677170703052,
	5.122355954472314,
	6.893713354304595,
	6.608756898493791,
	6.821632960289049,
	5.8066699525677645,
	5.219378778838001,
	6.611757842950386,
	5.713872997075277,
	6.465994950603519,
	4.911908457248129,
	4.281348634251286,
	4.986890661223937,
	6.272143953306185,
	4.832254845300142,
	3.924045121436136,
	4.716141901576362,
	7.641775347409405,
	5.562607762546018,
	5.147435929313871,
	6.072148784128246,
	7.3237089465986065,
	4.843675691336807,
	7.599171322704392,
	6.682023925411545,
	4.7559898993280365,
	7.994560147296659,
	5.029307189004372,
	8.077526054591948,
	5.600857803394894,
	5.687373685979791,
	4.802997950358681,
	6.595866045413842,
	3.291701910652134,
	6.0892466331022925,
	6.624208588381846,
	7.0194097098468555,
	4.947158956195083,
	4.852789673066396,
	6.204490067133728,
	4.251565623872309,
	7.263631603209551,
	5.2734301967823125,
	5.141824584831216,
	6.480804420506324,
	4.9400665881544175,
	6.378108116232176,
	6.353454366315021,
	5.3496839492545485,
	6.6862571034516565,
	3.9819095846522243,
	7.0288016624452,
	5.522119176410159,
	4.471451696903852,
	5.273664791537961,
	6.010666334777435,
	5.505559635070998,
	5.757873664803913,
	5.6574783360314695,
	6.873335281724089,
	7.539888119780009,
	6.65134457624659,
	4.782440561021103,
	7.439661327716104,
	4.701998562034231,
	6.3727343264109635,
	6.035460519369548,
	6.591088755297059,
	6.282679742095884,
	4.814019003419096,
	6.234473862251767,
	7.060446367381331,
	5.7678799806168595,
	6.445441808727695]

const pca2= [-2.5575396997276028,
	2.062457671504774,
	1.2576511934071015,
	-2.3350643231354287,
	1.6735125705979856,
	2.8725114826568645,
	11.957794769963405,
	-0.7147889066646925,
	0.7980380861532396,
	-1.4376959185654459,
	13.305631013921861,
	1.0088749470108893,
	0.9674662042186434,
	3.159624597722296,
	2.588568223369674,
	-1.2495244512178212,
	2.4458844900107475,
	-1.4095905298082203,
	2.403155887249949,
	-0.9231689006135253,
	3.790534564941481,
	-0.39110626316775615,
	0.42196024265848897,
	0.6900269743874877,
	-2.0766349621739426,
	-2.187677919335886,
	0.024480078581062492,
	0.06666442923319928,
	1.2506549252806656,
	0.987410094525141,
	0.05247579177136173,
	-3.9177961871765823,
	-0.6094451112965407,
	-0.7995617927630314,
	2.0894357827745176,
	-1.072711153255965,
	-1.1605584777895448,
	-1.77948799045203,
	-0.3637849987569112,
	2.9594919694785653,
	2.5530970819232395,
	-1.8942704739488152,
	2.4029583013620854,
	10.319700042675944,
	3.88952882174911,
	0.5451059920340605,
	1.4253439438010131,
	-0.8124517987016876,
	0.10098748340411698,
	2.731538991754321,
	-1.2709748503181586,
	1.5840272843970993,
	1.4235996987303634,
	-1.4160235632390568,
	-3.098516051170392,
	1.5345482562244954,
	0.6544694166614912,
	-0.3712466529762589,
	1.3507150766256417,
	-2.2421112506184047,
	3.8302952909169754,
	-3.4879303596166875,
	2.6930835868620404,
	1.6717554695649537,
	-3.3256634208591387,
	2.6199041342058185,
	1.310590007572461,
	0.3006426558017684,
	0.9281055927526544,
	2.9778408601256077,
	0.9465498202754707,
	0.36678780837024416,
	3.107747393380235,
	0.7801765868627232,
	-0.12762032431470532,
	1.814813499719247,
	1.210616998811979,
	2.036720301267688,
	1.7385004433362714,
	-2.216779824015128,
	1.9553450106139165,
	0.880907782267145,
	2.442683169337109,
	1.0273964323109117,
	-2.906025699855224,
	-1.607854370358004,
	-0.04752895700813965,
	-1.5365044936400183,
	-3.7589314783558483,
	-0.7328096809494212,
	2.155047899668668,
	-2.1831323677167473,
	2.076535781033138,
	-0.3100787283623772,
	-0.9516924935878963,
	3.2773044612361852,
	-0.7576581655768345,
	-1.2606083737510685,
	-3.2858651542947537,
	-0.8472106289017229,
	4.274419451644334,
	3.746094087169471,
	1.9004443625400151,
	-2.9390258923156374,
	4.485059663740915,
	-0.6721698814769719,
	0.8180061587680572,
	-1.448660787670035,
	-0.9274392557180274,
	-1.3246827663625413,
	-0.8405031160646008,
	2.184098561304578,
	-3.3457071086994468,
	3.111933806830274,
	-3.527422526019161,
	0.3599238199032371,
	-3.199624601578732,
	-2.0802146469092033,
	-1.6122267981473901,
	-3.233307536162216,
	-2.9899471150757644,
	-4.456293152946294,
	0.045257069470593325,
	1.2949990930298987,
	-0.0396569471006094,
	-1.6532071873384033,
	0.5854559209253062,
	-0.028067966602156057,
	-0.5664015720220951,
	-2.527549765638257,
	0.16356706970612245,
	0.9371598053589384,
	-2.180805003045085,
	-2.2778108660789163,
	1.7841393692414047,
	-2.606953979869985,
	0.317490827875661,
	-0.8387040533651913,
	-0.8387040533651913,
	-2.6055728617824268,
	-0.33335184378281735,
	-0.8131764581382941,
	-3.6119405116247316,
	7.272339243462183,
	-3.531774450891948,
	-0.453193253168342,
	1.7244530572990584,
	-3.5440502880239597,
	-2.8610128903998246,
	-1.9027835585159547,
	-0.20561777535011436,
	2.1324285210759304,
	-2.058121997390759,
	-1.9416045975625402,
	-3.6740833061626126,
	-1.6426340486708144,
	-0.7070576133977542,
	-3.565379637582852,
	-1.581734258195113,
	-1.2371273304453116,
	1.3874460094170395,
	0.23885919212573922,
	-0.8707856495165841,
	-2.070342541941671,
	-2.0772726326203226,
	1.327585347697381,
	-3.237837125658783,
	1.1852652539305533,
	-0.20659372489711428,
	2.2262005390991737,
	0.23578345170948123,
	-5.541957704693753,
	-2.424068665620221,
	0.5818140584368116,
	13.192109865582124,
	-1.8190299330878092,
	3.6065839829308532,
	1.832766700191038,
	-3.5026317963430884,
	-0.6207278535183836,
	-3.545767257139736,
	1.403505648174611,
	-3.4013644885473693,
	-2.6036669578058214,
	2.083442314238688,
	-3.1080623432630463,
	-3.179768347064671,
	-3.4152197483002564,
	2.1997806482933866,
	-2.805250186305657,
	-2.527009622899787,
	-0.7637272651036386,
	1.7842060358099952,
	-0.38628536381083106,
	1.7363396631279808,
	2.0120191714393934,
	-3.330231376015737,
	-0.9269691156120605,
	-1.588325242206855,
	-3.4577810691310513,
	-1.4546370164811084,
	0.7500831298303964,
	-1.0617812794209485,
	-3.1916543535246755,
	3.450558867586773,
	-1.137600006899666,
	-3.232200525393888,
	-2.9529217668880072,
	0.8081109984670607,
	0.46842862968135957,
	-3.9979926873990324,
	0.28156319029401683,
	0.6709946530278763,
	-1.8169774336866709,
	-0.967499125359731,
	-2.990741357445684,
	5.1349639111108125,
	-2.93990130485486,
	-2.7166410541410917,
	0.2650370405105361,
	-0.5978149166933184,
	1.0006445683572092,
	0.838904258955929,
	4.583996511640498,
	1.955116657737859,
	-3.226988812618216,
	-1.2191327244948371,
	-1.2707576609247109,
	-0.3008384624013771,
	1.707445063459335,
	1.3556120036314403,
	-0.174413850699885,
	0.06337900213734368,
	4.537067814069852,
	0.052730088795676595,
	1.9973224586631129,
	1.8601643792344573,
	2.336030362003349,
	0.6693520531889448,
	-2.934799238021233,
	0.6847783001007378,
	0.9555017348995823,
	2.774009324803612,
	3.0157624789890183,
	-0.8905179776392788,
	-3.1993321518833264,
	1.366817869755729,
	1.842407361466463,
	-0.11649728876706437,
	2.141340982409614,
	1.5422138871880662,
	1.7626221615052358,
	4.392587056930436,
	-0.6330580645552247,
	-2.3729919877304138,
	0.4445361993428955,
	-0.5807342683738829,
	3.158188670828466,
	-5.479549729360848,
	2.246793742936693,
	-1.1625996537739243,
	-2.366898332969184,
	0.24806114561896914,
	-2.2477107507746665,
	3.653757384883162,
	1.2728035159340825,
	2.1815695028374495,
	2.0832786609965086,
	2.643213423399632,
	1.8224963304353783,
	-2.6045811441611817,
	-2.551095119521064,
	1.4597071323147488,
	3.9544051632581922,
	4.793219778744828,
	-0.06308300856160068,
	1.4067053802313312,
	-3.9054559605045562,
	0.23035253120872962,
	-3.4952393149393397,
	-1.2735353347977054,
	2.3063535827572763,
	2.367969035634946,
	-5.628023806457145,
	1.7511556447690195,
	5.518811003732034,
	3.2083802807784436,
	-0.4872589931357112,
	-0.5438798023167296,
	0.1958295815216246,
	-3.683385738919452,
	1.136151508984121,
	2.1779805060814827,
	1.0664331673705898,
	-3.648379091126391,
	2.8851567545549495,
	2.713932234809367,
	2.2369377985357954,
	0.27642200937877176,
	2.0378581388905848,
	3.9143620041980247,
	-0.5258727925320122,
	0.8642028212130997,
	-0.16824403959997233,
	1.8984251954131577,
	2.224357410921927,
	0.08315608952561679,
	-2.673822178115613,
	1.577965888817451,
	-0.18095571056294274,
	3.466251090040515,
	2.126947914885596,
	-1.1948318995824028,
	2.7267840118118127,
	-2.0111603651145638,
	3.5053213226948796,
	0.2386825448897765,
	2.8535376952541154,
	1.6333368552404948,
	3.5256012425529493,
	1.474674960516965,
	-2.628950850932239,
	1.9621646505997568,
	-1.8422024731572606,
	1.3575611384679533,
	1.9688063302720933,
	0.28358034286742767,
	0.5401034474413341,
	0.8284448556433618,
	0.6319578608824226,
	-1.3455439376949156,
	1.9695837659377802,
	-2.8770730241042233,
	0.4587236233753876,
	-0.7773420142665332,
	-0.7127852911573722,
	-0.8023539066126982,
	2.358529527005946,
	0.6577020508503016,
	-2.0670467791719003,
	0.6865835641503748,
	-3.0560025652786638,
	-1.1473753706380023,
	-2.0985646926365638,
	-3.22685203072064,
	-2.926936287791697,
	2.9881624855968463,
	-1.988688567039736,
	-0.30929014022178714,
	-2.119391304768622,
	-1.8606087538440086,
	-3.01305618416492,
	0.3871548295033595,
	1.3910578075094737,
	1.0112078452665476,
	-0.054979590552707076,
	-0.1918668789768726,
	-0.07248228135334467,
	-1.4833802953080326,
	-1.875579469973657,
	0.6953909096894557,
	-3.710745659616873,
	-0.2332267036687853,
	-3.7043407550992122,
	-0.6780903019265365,
	0.8219684665708222,
	-2.138130177160195,
	0.6561533848319349,
	3.278069218496307,
	1.2188722282097402,
	2.734088571951271,
	0.2152208956327986,
	-4.883323831707145,
	0.16089374364447528,
	-1.682883061920884,
	-1.450665721856789,
	-0.7074929263253584,
	0.8283782273385546,
	-3.596912973758864,
	1.008044357149659,
	0.007912589917536666,
	-3.830361730011952,
	-2.948816213585857,
	1.6321948690358248,
	1.4837090035675005,
	-3.942991747184679,
	-0.939865985280902,
	-0.1550648091895747,
	-1.9049079458742557,
	-0.49138342884350994,
	-1.042457500442402,
	-2.226623469145396,
	-1.5276420049248578,
	-1.3185855873825267,
	1.6632401793342275,
	2.6204592003734923,
	0.8762360072636665,
	1.2417934804079638,
	2.110053838327638,
	0.6496186322654042,
	1.4945384757109925,
	0.3235549483406758,
	-0.623634153039072,
	-1.1970384550531814,
	2.6976386590127523,
	-1.067676218240477,
	0.14220303788655475,
	-0.6115494730901764,
	-0.10173066607061362,
	-3.044795330329631,
	-2.8695539385939512,
	2.2298764824104653,
	-1.0517359101165147,
	2.434509686341573,
	-1.755542653645746,
	2.6413906988269424,
	-3.6959057954922603,
	-2.604802076458342,
	-1.181073722903387,
	-4.188364887855391,
	-1.9181434569102889,
	1.0460740279195384,
	-2.256071333871243,
	-0.15879275307034865,
	-2.459803569546652,
	-1.2745796238083782,
	-1.3047465129595377,
	1.3477626402271639,
	1.1207433699150084,
	-1.6706256752226827,
	0.5712464749830406,
	2.3729484185968768,
	1.2526057190791955,
	-1.7813516923105384,
	1.334767923108727,
	-0.5762660121466121,
	-2.129649705965926,
	-0.5152881852120764,
	-0.18346336707684188,
	0.039293205664901555]
const eruptive = ['Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Plinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Subplinian',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Dome explosion',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining',
'Lava fountaining']
const PCA = () =>{

	let dict ={
		
	}
	for(let i=0;i<eruptive.length;i++){
		dict[eruptive[i]] = {'pca1':[],'pca2':[]}
	}

	for(let i=0;i<eruptive.length;i++){
		dict[eruptive[i]]['pca1'].push(pca1[i])
		dict[eruptive[i]]['pca2'].push(pca2[i])
	}

	console.log(dict)

	let data = []
	
	for(let e in dict){
		data.push(
			{
				x:dict[e]['pca1'],
				y:dict[e]['pca2'],
				mode:'markers',
				type:'scatter',
				name:e
			}
		)
	}

	var trace1 = [{
		x: pca1,
		y: pca2,
		mode: 'markers',
		type: 'scatter'
	      }	
	];
	return(
		<div>
			<Plot
				data= {data}
				layout={ {width: (40/100)*window.screen.width,title:'PCA',
					xaxis: {
						visible: true,
						showline:false,
						zeroline:false
					
					      },
					      yaxis: {
						visible: true,
						zeroline:false
					      }
				
				
				}}
			
			/>
		</div>
	);
}

export default PCA