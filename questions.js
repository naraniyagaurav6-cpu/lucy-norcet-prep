const questions = [

{
question:"Normal gestation period is?",
options:["36 Weeks","38 Weeks","40 Weeks","42 Weeks"],
answer:2,
explanation:"Normal pregnancy lasts about 40 weeks."
},

{
question:"Normal fetal heart rate is?",
options:["80-100 bpm","110-160 bpm","170-190 bpm","200 bpm"],
answer:1,
explanation:"Normal fetal heart rate is 110–160 bpm."
},

{
question:"Which vitamin prevents Neural Tube Defect?",
options:["Vitamin C","Vitamin D","Folic Acid","Vitamin K"],
answer:2,
explanation:"Folic acid helps prevent neural tube defects."
},

{
question:"Normal amniotic fluid at term is?",
options:["200 ml","500 ml","800-1000 ml","2500 ml"],
answer:2,
explanation:"Normal amniotic fluid at term is about 800–1000 ml."
},

{
question:"hCG is secreted by?",
options:["Placenta","Pituitary","Ovary","Liver"],
answer:0,
explanation:"hCG is produced by the placenta."
},

{
question:"Which pelvic type is most favorable for vaginal delivery?",
options:["Android","Anthropoid","Gynecoid","Platypelloid"],
answer:2,
explanation:"Gynecoid pelvis is ideal for vaginal delivery."
},

{
question:"The first stage of labour begins with?",
options:["Delivery of baby","True labour pains","Delivery of placenta","Rupture of membranes only"],
answer:1,
explanation:"The first stage begins with true labour pains."
},

{
question:"Normal duration of first stage of labour in primigravida?",
options:["2–4 hours","6–8 hours","12–14 hours","18–20 hours"],
answer:2,
explanation:"Usually lasts 12–14 hours."
},

{
question:"Drug of choice for prevention of PPH?",
options:["Oxytocin","Diazepam","Atropine","Magnesium Sulphate"],
answer:0,
explanation:"Oxytocin is the first-line uterotonic."
},

{
question:"Earliest investigation to confirm pregnancy?",
options:["Ultrasound","Urine hCG Test","X-ray","Abdominal palpation"],
answer:1,
explanation:"Urine hCG becomes positive early in pregnancy."
},

{
question:"Which hormone maintains pregnancy in the first trimester?",
options:["Estrogen","Progesterone","Oxytocin","Prolactin"],
answer:1,
explanation:"Progesterone maintains pregnancy."
},

{
question:"Fundal height at 20 weeks is at?",
options:["Symphysis pubis","Umbilicus","Xiphisternum","Below umbilicus"],
answer:1,
explanation:"At 20 weeks the fundus reaches the umbilicus."
},

{
question:"Most common fetal presentation?",
options:["Breech","Cord","Vertex","Shoulder"],
answer:2,
explanation:"Vertex is the most common presentation."
},

{
question:"APGAR score is assessed at?",
options:["1 and 5 minutes","10 minutes","15 minutes","30 minutes"],
answer:0,
explanation:"APGAR is assessed at 1 and 5 minutes."
},

{
question:"Which vitamin is routinely given to newborn?",
options:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],
answer:3,
explanation:"Vitamin K prevents hemorrhagic disease of the newborn."
},

{
question:"Normal duration of pregnancy?",
options:["36 weeks","38 weeks","40 weeks","42 weeks"],
answer:2,
explanation:"A normal pregnancy lasts about 40 weeks."
},

{
question:"First-line uterotonic for PPH?",
options:["Oxytocin","Misoprostol","Methylergometrine","Carboprost"],
answer:0,
explanation:"Oxytocin is the first-line uterotonic."
},

{
question:"Placenta is completely formed by?",
options:["8 weeks","12 weeks","20 weeks","28 weeks"],
answer:1,
explanation:"Placenta is functionally formed by around 12 weeks."
},

{
question:"Magnesium Sulphate is the drug of choice for?",
options:["Postpartum Hemorrhage","Eclampsia","Anemia","Abortion"],
answer:1,
explanation:"Magnesium Sulphate is used to prevent and treat eclamptic seizures."
},

{
question:"The first breast milk is called?",
options:["Transitional Milk","Mature Milk","Colostrum","Fore Milk"],
answer:2,
explanation:"Colostrum is rich in antibodies."
},
{
question:"The normal duration of the third stage of labour is?",
options:["5–30 minutes","1 hour","2 hours","3 hours"],
answer:0,
explanation:"The placenta is normally delivered within 5–30 minutes."
},

{
question:"Which vitamin deficiency is associated with neural tube defects?",
options:["Vitamin A","Vitamin B12","Folic Acid","Vitamin D"],
answer:2,
explanation:"Folic acid deficiency increases the risk of neural tube defects."
},

{
question:"The Bishop Score is used to assess?",
options:["Fetal growth","Placental function","Cervical readiness for induction","Newborn health"],
answer:2,
explanation:"Bishop score predicts the success of labour induction."
},

{
question:"The normal amount of blood loss during vaginal delivery is?",
options:["100 mL","250 mL","500 mL","1000 mL"],
answer:2,
explanation:"Blood loss up to 500 mL is considered normal after vaginal delivery."
},

{
question:"Which fetal presentation usually requires cesarean section?",
options:["Vertex","Face","Shoulder","Occipito-anterior"],
answer:2,
explanation:"Shoulder presentation usually requires cesarean delivery."
},

{
question:"Which investigation is considered the gold standard for confirming fetal well-being?",
options:["Ultrasound","Non-Stress Test","Biophysical Profile","Doppler Study"],
answer:2,
explanation:"Biophysical Profile (BPP) provides comprehensive assessment of fetal well-being."
},

{
question:"Which hormone is responsible for milk production?",
options:["Oxytocin","Progesterone","Prolactin","Estrogen"],
answer:2,
explanation:"Prolactin stimulates the production of breast milk."
},

{
question:"The average length of a term newborn is?",
options:["35 cm","40 cm","50 cm","60 cm"],
answer:2,
explanation:"A healthy term newborn is approximately 50 cm long."
},

{
question:"Which pelvic shape is least favorable for vaginal delivery?",
options:["Gynecoid","Anthropoid","Android","Platypelloid"],
answer:2,
explanation:"The Android pelvis is associated with difficult labour."
},

{
question:"The first fetal movement felt by the mother is called?",
options:["Lightening","Quickening","Engagement","Ballottement"],
answer:1,
explanation:"Quickening is the mother's first perception of fetal movement."
},

{
question:"Engagement means?",
options:[
"Placenta separates",
"Head enters pelvic inlet",
"Cervix dilates",
"Baby is delivered"
],
answer:1,
explanation:"Engagement occurs when the widest diameter of the fetal head enters the pelvic brim."
},

{
question:"The normal respiratory rate of a newborn is?",
options:["10–20/min","20–30/min","30–60/min","60–80/min"],
answer:2,
explanation:"The normal respiratory rate of a newborn is 30–60 breaths per minute."
},

{
question:"Which vaccine is given at birth?",
options:["BCG","MMR","DPT","Typhoid"],
answer:0,
explanation:"BCG is routinely administered at birth."
},

{
question:"The normal fetal heart sound is usually heard after?",
options:["6 weeks","10 weeks","18–20 weeks","30 weeks"],
answer:2,
explanation:"Fetal heart sounds are commonly heard with a fetoscope around 18–20 weeks."
},

{
question:"Which condition is known as pregnancy-induced hypertension?",
options:["Preeclampsia","Placenta previa","Abruptio placentae","Hydramnios"],
answer:0,
explanation:"Pregnancy-induced hypertension commonly refers to preeclampsia."
},

{
question:"The average weight of a healthy term newborn is?",
options:["1.5 kg","2 kg","3 kg","5 kg"],
answer:2,
explanation:"The average birth weight of a healthy term newborn is about 3 kg."
},

{
question:"Which of the following is a probable sign of pregnancy?",
options:[
"Morning sickness",
"Hegar's sign",
"Amenorrhea",
"Quickening"
],
answer:1,
explanation:"Hegar's sign is a probable sign of pregnancy."
},

{
question:"The fetal skull has how many bones?",
options:["4","6","8","10"],
answer:1,
explanation:"The fetal skull consists of 6 bones."
},

{
question:"Which diameter presents in a well-flexed vertex presentation?",
options:[
"Occipitofrontal",
"Suboccipitobregmatic",
"Mentovertical",
"Submentobregmatic"
],
answer:1,
explanation:"Suboccipitobregmatic (9.5 cm) is the presenting diameter."
},

{
question:"First dose of TT/Td vaccine in pregnancy is given?",
options:[
"At delivery",
"First ANC visit",
"After delivery",
"At 9 months"
],
answer:1,
explanation:"TT/Td vaccination starts at the first ANC visit."
}, 
 {
question:"Fetal heart rate should be counted for?",
options:[
"15 seconds",
"30 seconds",
"1 minute",
"2 minutes"
],
answer:2,
explanation:"Fetal heart rate should be counted for one full minute."
},

{
question:"Placenta normally separates during which stage of labour?",
options:[
"First stage",
"Second stage",
"Third stage",
"Fourth stage"
],
answer:2,
explanation:"Placenta separates during the third stage of labour."
},

{
question:"Most common cause of maternal mortality in India?",
options:[
"Anemia",
"Postpartum Hemorrhage",
"Eclampsia",
"Sepsis"
],
answer:1,
explanation:"Postpartum hemorrhage is a leading cause of maternal mortality."
},

{
question:"Normal duration of puerperium?",
options:[
"2 weeks",
"4 weeks",
"6 weeks",
"12 weeks"
],
answer:2,
explanation:"Puerperium lasts about 6 weeks."
},

{
question:"Fetal part of placenta is formed by?",
options:[
"Decidua basalis",
"Chorion frondosum",
"Endometrium",
"Myometrium"
],
answer:1,
explanation:"Chorion frondosum forms the fetal part of placenta."
},

{
question:"First examination of a newborn should be done?",
options:[
"Within 24 hours",
"Immediately after birth",
"After 48 hours",
"After discharge"
],
answer:1,
explanation:"A newborn should be examined immediately after birth."
},

{
question:"Most common female pelvic type?",
options:[
"Android",
"Gynecoid",
"Anthropoid",
"Platypelloid"
],
answer:1,
explanation:"Gynecoid pelvis is the most common female pelvis."
},

{
question:"During normal labour fetal heart rate should be checked every?",
options:[
"5 minutes",
"15–30 minutes",
"1 hour",
"2 hours"
],
answer:1,
explanation:"FHR is checked every 15–30 minutes during the first stage."
},

{
question:"Most common cause of antepartum hemorrhage?",
options:[
"Placenta previa",
"Abruptio placentae",
"Uterine rupture",
"Cervical polyp"
],
answer:0,
explanation:"Placenta previa is a common cause of painless antepartum hemorrhage."
},

{
question:"Which is a danger sign during pregnancy?",
options:[
"Mild nausea",
"Fetal movements",
  "Severe vaginal bleeding",
"Weight gain"
],
answer:2,
explanation:"Severe vaginal bleeding is an obstetric emergency."
},

{
question:"Fetal head is engaged when biparietal diameter passes through?",
options:[
"Pelvic outlet",
"Pelvic inlet",
"Cervix",
"Vagina"
],
answer:1,
explanation:"Engagement occurs when the biparietal diameter passes the pelvic inlet."
},

{
question:"Instrument commonly used to cut umbilical cord?",
options:[
"Artery forceps",
"Episiotomy scissors",
"Sterile scissors",
"Sponge holding forceps"
],
answer:2,
explanation:"Sterile scissors are used to cut the umbilical cord."
},

{
question:"Normal amniotic fluid volume at term?",
options:[
"200–300 mL",
"400–600 mL",
"800–1000 mL",
"1500–2000 mL"
],
answer:2,
explanation:"Normal amniotic fluid volume at term is 800–1000 mL."
},

{
question:"Longest stage of labour?",
options:[
"First stage",
"Second stage",
"Third stage",
"Fourth stage"
],
answer:0,
explanation:"The first stage is the longest stage of labour."
},

{
question:"Hormone responsible for cervical softening before labour?",
options:[
"Insulin",
"Relaxin",
"TSH",
"ADH"
],
answer:1,
explanation:"Relaxin softens the cervix and pelvic ligaments."
},

{
question:"Normal pulse rate of a healthy newborn?",
options:[
"60–80/min",
"80–100/min",
"120–160/min",
"180–200/min"
],
answer:2,
explanation:"Normal newborn pulse rate is 120–160 beats per minute."
},

{
question:"Which investigation is used to detect fetal anomalies during pregnancy?",
options:["CT Scan","Ultrasound","X-ray","ECG"],
answer:1,
explanation:"Ultrasound is the safest and most commonly used investigation."
},

{
question:"The fetal heart begins to beat at approximately?",
options:["3 weeks","5 weeks","8 weeks","12 weeks"],
answer:1,
explanation:"The fetal heart starts beating at about 5 weeks."
},

{
question:"Excessive amniotic fluid is called?",
options:["Oligohydramnios","Polyhydramnios","Eclampsia","Placenta previa"],
answer:1,
explanation:"Polyhydramnios means excessive amniotic fluid."
},

{
question:"Normal duration of the fourth stage of labour?",
options:["30 minutes","1 hour","2 hours","4 hours"],
answer:2,
explanation:"The fourth stage consists of the first 2 hours after delivery."
},
{
question:"Most common site of uterine rupture?",
options:["Fundus","Lower uterine segment","Cervix","Cornua"],
answer:1,
explanation:"The lower uterine segment is the commonest site."
},

{
question:"Which fetal skull landmark is diamond-shaped?",
options:["Posterior fontanelle","Anterior fontanelle","Sagittal suture","Lambdoid suture"],
answer:1,
explanation:"The anterior fontanelle is diamond-shaped."
},

{
question:"Best method to prevent puerperal sepsis?",
options:["Antibiotics to all mothers","Strict aseptic technique","Bed rest","Vitamin supplements"],
answer:1,
explanation:"Strict aseptic technique is the best preventive measure."
},

{
question:"Earliest sign of labour?",
options:["Show","Placental separation","Lactation","Quickening"],
answer:0,
explanation:"'Show' is one of the earliest signs of labour."
},

{
question:"Maternal part of placenta is formed by?",
options:["Chorion frondosum","Decidua basalis","Amnion","Umbilical cord"],
answer:1,
explanation:"The decidua basalis forms the maternal part of the placenta."
},

{
question:"Most common indication for cesarean section?",
options:["Placenta previa","Cephalopelvic disproportion","Hydramnios","Anemia"],
answer:1,
explanation:"Cephalopelvic disproportion is a common indication."
},

{
question:"Most common cause of postpartum hemorrhage?",
options:["Retained placenta","Uterine atony","Cervical tear","Coagulation disorder"],
answer:1,
explanation:"Uterine atony is the leading cause of postpartum hemorrhage."
},

{
question:"Drug of choice for prevention of eclamptic seizures?",
options:["Oxytocin","Magnesium Sulphate","Methylergometrine","Calcium Gluconate"],
answer:1,
explanation:"Magnesium Sulphate is the drug of choice."
},

{
question:"First breast milk rich in antibodies is called?",
options:["Foremilk","Hindmilk","Colostrum","Transitional milk"],
answer:2,
explanation:"Colostrum provides passive immunity."
},

{
question:"Average weight of placenta at term?",
options:["250 g","350 g","500 g","800 g"],
answer:2,
explanation:"A normal placenta weighs about 500 g."
},

{
question:"A postpartum woman's uterus is boggy. What should the nurse do first?",
options:[
"Call physician",
"Massage the fundus",
"Administer antibiotics",
"Insert urinary catheter"
],
answer:1,
explanation:"A boggy uterus indicates uterine atony. The first nursing action is fundal massage."
},

{
question:"A woman receiving magnesium sulfate has absent deep tendon reflexes and a respiratory rate of 10/min. What should the nurse do first?",
options:[
"Continue infusion",
"Stop magnesium sulfate",
"Increase IV fluids",
"Encourage deep breathing"
],
answer:1,
explanation:"These are signs of magnesium toxicity. Stop the infusion immediately."
},

{
question:"A client receiving oxytocin develops contractions every 1 minute lasting 100 seconds. What is the nurse's first action?",
options:[
"Stop the oxytocin infusion",
"Increase the infusion rate",
"Encourage pushing",
"Place the client flat"
],
answer:0,
explanation:"Stop oxytocin immediately because uterine tachysystole can reduce fetal oxygenation."
},

{
question:"A pregnant client presents with painful vaginal bleeding, abdominal tenderness, and a rigid uterus. Which condition is most likely?",
options:[
"Placenta previa",
"Placental abruption",
"Preterm labour",
"Hydramnios"
],
answer:1,
explanation:"Painful bleeding with a rigid uterus is a classic sign of placental abruption."
},

{
question:"A client at 32 weeks has BP 170/110 mmHg with severe headache and blurred vision. Which condition is most likely?",
options:[
"Gestational hypertension",
"Severe preeclampsia",
"Eclampsia",
"HELLP syndrome"
],
answer:1,
explanation:"Severely elevated BP with headache and visual disturbance suggests severe preeclampsia."
}

];  
