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
explanation:"Uterine atony is the leading cause of PPH."
},

{
question:"Antidote for Oxytocin overdose?",
options:["Calcium Gluconate","Stop Oxytocin infusion","Vitamin K","Magnesium Sulphate"],
answer:1,
explanation:"Stop the oxytocin infusion immediately."
},

{
question:"APGAR score is assessed at?",
options:["1 & 5 minutes","10 & 15 minutes","30 minutes","60 minutes"],
answer:0,
explanation:"APGAR is assessed at 1 and 5 minutes."
},

{
question:"Normal fetal heart rate range?",
options:["90–120 bpm","100–140 bpm","110–160 bpm","160–200 bpm"],
answer:2,
explanation:"Normal fetal heart rate is 110–160 bpm."
},

{
question:"Most common fetal malpresentation?",
options:["Face","Brow","Breech","Shoulder"],
answer:2,
explanation:"Breech is the most common malpresentation."
},

{
question:"Drug of choice for prevention of eclamptic seizures?",
options:["Oxytocin","Magnesium Sulphate","Methylergometrine","Calcium Gluconate"],
answer:1,
explanation:"Magnesium Sulphate is the drug of choice."
},

{
question:"Normal duration of puerperium?",
options:["2 weeks","4 weeks","6 weeks","8 weeks"],
answer:2,
explanation:"Puerperium lasts approximately 6 weeks."
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
question:"Best postpartum contraception for a breastfeeding mother?",
options:[
"Combined Oral Pills",
"Copper-T (if clinically eligible)",
"Emergency Contraceptive Pill",
"Vaginal Ring"
],
answer:1,
explanation:"A postpartum IUCD (Copper-T), when clinically appropriate, is an effective option."
}

];
  {
  question: "A 38-week pregnant client arrives with painless, bright red vaginal bleeding. What is the nurse's priority action?",
  options: [
    "Perform a vaginal examination",
    "Assess fetal heart rate",
    "Encourage ambulation",
    "Start oxytocin infusion"
  ],
  answer: 1,
  explanation: "Bright red, painless bleeding suggests placenta previa. The priority is to assess fetal heart rate to evaluate fetal well-being. A digital vaginal examination is contraindicated because it may cause severe hemorrhage."
},
{
  question: "A woman receiving magnesium sulfate has absent deep tendon reflexes and a respiratory rate of 10/min. What should the nurse do first?",
  options: [
    "Continue infusion",
    "Stop magnesium sulfate",
    "Increase IV fluids",
    "Encourage deep breathing"
  ],
  answer: 1,
  explanation: "Absent deep tendon reflexes and respiratory depression are signs of magnesium toxicity. Stop the infusion immediately and prepare to administer calcium gluconate."
},
{
  question: "A postpartum woman's uterus is boggy. What should the nurse do first?",
  options: [
    "Call physician",
    "Massage the fundus",
    "Administer antibiotics",
    "Insert urinary catheter"
  ],
  answer: 1,
  explanation: "A boggy uterus indicates uterine atony, the most common cause of postpartum hemorrhage. The first nursing action is fundal massage."
},
{
  question: "A newborn's heart rate is 90/min immediately after birth. What should the nurse do?",
  options: [
    "Observe",
    "Begin positive-pressure ventilation",
    "Start chest compressions",
    "Give oxygen only"
  ],
  answer: 1,
  explanation: "According to Neonatal Resuscitation Program (NRP) guidelines, a heart rate below 100/min requires positive-pressure ventilation."
},
{
  question: "A client at 34 weeks reports sudden leakage of clear fluid. Which complication is the priority concern?",
  options: [
    "Maternal fever",
    "Umbilical cord prolapse",
    "Gestational diabetes",
    "Polyhydramnios"
  ],
  answer: 1,
  explanation: "Preterm premature rupture of membranes increases the risk of umbilical cord prolapse, which can compromise fetal oxygenation."
}
{
  question: "A postpartum woman has heavy vaginal bleeding, but her uterus is firm and contracted. What is the most likely cause?",
  options: [
    "Uterine atony",
    "Retained placental fragments",
    "Cervical or vaginal laceration",
    "Uterine inversion"
  ],
  answer: 2,
  explanation: "A firm uterus with continued heavy bleeding suggests trauma, such as a cervical or vaginal laceration, rather than uterine atony."
},
{
  question: "A client receiving oxytocin develops contractions every 1 minute lasting 100 seconds. What is the nurse's first action?",
  options: [
    "Stop the oxytocin infusion",
    "Increase the infusion rate",
    "Place the client in Trendelenburg position",
    "Encourage the client to push"
  ],
  answer: 0,
  explanation: "Excessive uterine contractions (tachysystole) reduce placental blood flow and can cause fetal distress. The first action is to stop the oxytocin infusion."
},
{
  question: "Which assessment finding indicates that breastfeeding is effective?",
  options: [
    "The infant has at least 6 wet diapers per day after the fifth day of life",
    "The infant sleeps for 8 hours without feeding",
    "The infant cries after every feeding",
    "The mother's breasts remain soft after feeding"
  ],
  answer: 0,
  explanation: "Six or more wet diapers daily after day 5 indicate that the infant is receiving adequate breast milk."
},
{
  question: "A pregnant client presents with painful vaginal bleeding, abdominal tenderness, and a rigid uterus. Which condition is most likely?",
  options: [
    "Placenta previa",
    "Placental abruption",
    "Vasa previa",
    "Preterm labor"
  ],
  answer: 1,
  explanation: "Painful bleeding with a rigid, tender uterus is a classic sign of placental abruption and requires immediate intervention."
},
{
  question: "A client at 32 weeks' gestation has blood pressure of 170/110 mmHg, severe headache, and blurred vision. Which condition should the nurse suspect?",
  options: [
    "Gestational hypertension",
    "Severe preeclampsia",
    "Eclampsia",
    "HELLP syndrome"
  ],
  answer: 1,
  explanation: "Severely elevated blood pressure with headache and visual disturbances strongly suggests severe preeclampsia, an obstetric emergency."
},
{
  question: "A client at 37 weeks' gestation reports a severe headache, blurred vision, and epigastric pain. Which complication should the nurse suspect?",
  options: ["Gestational diabetes", "Severe preeclampsia", "Placenta previa", "Hyperemesis gravidarum"],
  answer: 1,
  explanation: "Severe headache, visual disturbances, and epigastric pain are warning signs of severe preeclampsia and require immediate intervention."
},
{
  question: "Which fetal heart rate pattern is most concerning during labor?",
  options: ["Baseline 140 bpm", "Early decelerations", "Late decelerations", "Moderate variability"],
  answer: 2,
  explanation: "Late decelerations indicate uteroplacental insufficiency and fetal hypoxia."
},
{
  question: "A postpartum client develops a temperature of 39°C with foul-smelling lochia. Which condition is most likely?",
  options: ["Mastitis", "Endometritis", "Urinary tract infection", "Normal postpartum change"],
  answer: 1,
  explanation: "Fever with foul-smelling lochia is a classic sign of postpartum endometritis."
},
{
  question: "A woman at 30 weeks' gestation reports decreased fetal movement. What is the nurse's priority action?",
  options: ["Reassure the client", "Assess fetal heart rate", "Schedule a follow-up in one week", "Encourage sleep"],
  answer: 1,
  explanation: "Decreased fetal movement may indicate fetal compromise and requires immediate fetal assessment."
},
{
  question: "Which medication is commonly used to prevent seizures in severe preeclampsia?",
  options: ["Oxytocin", "Magnesium sulfate", "Methylergometrine", "Terbutaline"],
  answer: 1,
  explanation: "Magnesium sulfate is the drug of choice for seizure prophylaxis in severe preeclampsia."
},
{
  question: "A newborn has central cyanosis and poor respiratory effort immediately after birth. What is the priority nursing action?",
  options: ["Wrap the baby in a blanket", "Begin positive-pressure ventilation", "Administer Vitamin K", "Start chest compressions immediately"],
  answer: 1,
  explanation: "Poor respiratory effort with central cyanosis requires immediate positive-pressure ventilation according to NRP guidelines."
},
{
  question: "Which assessment finding is most suggestive of uterine rupture?",
  options: ["Gradual onset of contractions", "Sudden severe abdominal pain with fetal distress", "Bright red painless bleeding", "Slow cervical dilation"],
  answer: 1,
  explanation: "Sudden abdominal pain, fetal distress, and loss of contractions suggest uterine rupture."
},
{
  question: "Which maternal position is best for improving fetal oxygenation during labor?",
  options: ["Supine", "Lithotomy", "Left lateral", "Trendelenburg"],
  answer: 2,
  explanation: "The left lateral position improves uteroplacental blood flow by reducing vena cava compression."
},
{
  question: "A postpartum woman has a boggy uterus despite fundal massage. Which medication should the nurse anticipate?",
  options: ["Oxytocin", "Insulin", "Heparin", "Magnesium sulfate"],
  answer: 0,
  explanation: "Oxytocin is the first-line uterotonic medication used to treat uterine atony."
},
{
  question: "Which finding indicates successful neonatal transition after birth?",
  options: ["Persistent central cyanosis", "Heart rate below 100/min", "Pink body with spontaneous regular respirations", "Absent crying"],
  answer: 2,
  explanation: "A pink body with spontaneous respirations and a heart rate above 100/min indicates successful adaptation to extrauterine life."
},
{
  question: "A pregnant woman at 35 weeks presents with painless vaginal bleeding. Which nursing action is contraindicated?",
  options: [
    "Monitor fetal heart rate",
    "Assess maternal vital signs",
    "Perform a digital vaginal examination",
    "Prepare for ultrasound"
  ],
  answer: 2,
  explanation: "Digital vaginal examination is contraindicated in suspected placenta previa because it can trigger massive hemorrhage."
},
{
  question: "A client receiving magnesium sulfate has a respiratory rate of 8/min. Which medication should the nurse prepare to administer?",
  options: [
    "Oxytocin",
    "Calcium gluconate",
    "Vitamin K",
    "Terbutaline"
  ],
  answer: 1,
  explanation: "Respiratory depression is a sign of magnesium toxicity. Calcium gluconate is the antidote."
},
{
  question: "Which finding is most consistent with placental abruption?",
  options: [
    "Bright red painless bleeding",
    "Dark vaginal bleeding with abdominal pain",
    "Clear fluid leakage",
    "No uterine tenderness"
  ],
  answer: 1,
  explanation: "Placental abruption typically presents with painful dark bleeding, uterine tenderness, and fetal distress."
},
{
  question: "Which assessment finding is expected immediately after a normal vaginal birth?",
  options: [
    "Boggy uterus",
    "Fundus firm at the level of the umbilicus",
    "Heavy bright-red bleeding",
    "Absent lochia"
  ],
  answer: 1,
  explanation: "A firm uterus at or near the umbilicus is a normal postpartum finding."
},
{
  question: "Which maternal condition increases the risk of neonatal hypoglycemia?",
  options: [
    "Gestational diabetes",
    "Iron deficiency anemia",
    "Rh incompatibility",
    "Placenta previa"
  ],
  answer: 0,
  explanation: "Infants of diabetic mothers produce excess insulin and are at high risk for hypoglycemia after birth."
},
{
  question: "A nurse notes variable decelerations on the fetal monitor. What is the most likely cause?",
  options: [
    "Uteroplacental insufficiency",
    "Umbilical cord compression",
    "Maternal hypertension",
    "Placental separation"
  ],
  answer: 1,
  explanation: "Variable decelerations are usually caused by umbilical cord compression."
},
{
  question: "Which newborn requires immediate nursing intervention?",
  options: [
    "Respiratory rate 45/min",
    "Heart rate 140/min",
    "Temperature 36.8°C",
    "Central cyanosis after 5 minutes"
  ],
  answer: 3,
  explanation: "Persistent central cyanosis after birth suggests inadequate oxygenation and requires immediate assessment."
},
{
  question: "Which finding indicates postpartum endometritis?",
  options: [
    "Foul-smelling lochia with fever",
    "Firm uterus",
    "Scant lochia alba",
    "Breast fullness"
  ],
  answer: 0,
  explanation: "Endometritis commonly presents with fever, uterine tenderness, and foul-smelling lochia."
},
{
  question: "A laboring woman suddenly complains of severe chest pain and becomes hypotensive. Which emergency should the nurse suspect?",
  options: [
    "Placenta previa",
    "Amniotic fluid embolism",
    "Preeclampsia",
    "Preterm labor"
  ],
  answer: 1,
  explanation: "Amniotic fluid embolism presents with sudden respiratory distress, hypotension, and cardiovascular collapse."
},
{
  question: "Which intervention is most appropriate for uterine atony after delivery?",
  options: [
    "Fundal massage and oxytocin administration",
    "Encourage ambulation",
    "Place the client in Trendelenburg position",
    "Administer magnesium sulfate"
  ],
  answer: 0,
  explanation: "The first-line treatment for uterine atony is fundal massage followed by uterotonic medications such as oxytocin."
},  
];
