// Medicine data (you can add more medicines here)
const medicineData = {
    "paracetamol": {
        "details": `
1. Name of the Medicine: Paracetamol
2. Description: Paracetamol is a commonly used medicine to relieve mild to moderate pain and reduce fever. It is safe for most people when taken in the correct dosage.

3. Dosage:
   - Adults: 500mg to 1000mg every 4-6 hours as needed, not exceeding 4000mg per day.
   - Children: Dosage is based on weight, typically 15mg per kg of body weight, every 4-6 hours. Consult a doctor for precise recommendations.

4. Side Effects: 
   - Nausea
   - Rash
   - Dizziness
   - In rare cases, liver damage if taken in high doses.

5. Drug Interactions: 
   - Avoid alcohol as it increases the risk of liver damage.
   - Be cautious when taking with other medications like Warfarin or Carbamazepine.

6. Precautions:
   - Do not take more than the recommended dose.
   - Consult a doctor if symptoms persist or worsen after 3 days.
   - Not recommended for individuals with severe liver disease.
        `,
        "image": "./images/paracetamol.jpg"
    },
    "ibuprofen": {
        "details": `
1. Name of the Medicine: Ibuprofen
2. Description: Ibuprofen is an anti-inflammatory drug used to reduce fever, pain, and swelling. It is commonly used for headaches, muscle pain, arthritis, and menstrual cramps.

3. Dosage:
   - Adults: 200-400 mg every 4-6 hours as needed, not exceeding 3200 mg per day.
   - Children: Consult a doctor for dosage based on weight and age.

4. Side Effects:
   - Stomach upset
   - Nausea
   - Dizziness
   - Rare cases of kidney damage

5. Drug Interactions:
   - Avoid taking with other NSAIDs or blood thinners without consulting a doctor.
   - Be cautious when taken with medications like Aspirin or certain antidepressants.

6. Precautions:
   - Take with food or milk to reduce stomach irritation.
   - Not recommended for individuals with severe kidney disease or stomach ulcers.
        `,
        "image": "./images/ibuprofen.jpg"
    },
    "aspirin": {
        "details": `
1. Name of the Medicine: Aspirin
2. Description: Aspirin is an anti-inflammatory and blood-thinning medication. It is used to reduce pain, fever, inflammation, and the risk of heart attacks and strokes in specific patients.

3. Dosage:
   - Adults: 50-325 mg daily for cardiovascular prevention, or 325-650 mg every 4-6 hours for pain relief. Do not exceed 4000 mg per day.
   - Children: Aspirin is generally not recommended for children due to the risk of Reye's syndrome.

4. Side Effects:
   - Stomach upset
   - Heartburn
   - Nausea
   - Rare cases of bleeding or ulcers

5. Drug Interactions:
   - Avoid taking with other blood-thinners like Warfarin without consulting a doctor.
   - Be cautious when combining with NSAIDs or alcohol.

6. Precautions:
   - Do not take if you have bleeding disorders or are allergic to NSAIDs.
   - Consult a doctor before use during pregnancy or breastfeeding.
        `,
        "image": "./images/aspirin.jpg"
    },
  "amoxicillin": {
  "details": `
    1: Name of the Medicine: Amoxicillin
    2: Description: Amoxicillin is a penicillin antibiotic used to treat bacterial infections like ear infections, throat infections, pneumonia, and urinary tract infections.
    3: Dosage: Adults: 500mg to 875mg every 8-12 hours, depending on the severity of the infection. Children: Dosage is based on body weight, typically 20-40mg per kg per day, divided into two or three doses.
    4: Side Effects: \n- Nausea\n- Vomiting\n- Diarrhea\n- Rash\n- Rarely, allergic reactions such as difficulty breathing or severe rash.
    5: Drug Interactions: \n- May interact with medications like allopurinol, oral contraceptives, and anticoagulants (e.g., Warfarin).\n- Inform your doctor of all medications you are taking.
    6: Precautions: \n- Do not use if allergic to penicillin or cephalosporin antibiotics.\n- Complete the full prescribed course, even if symptoms improve.\n- Consult a doctor if symptoms worsen or do not improve after a few days.
     `,
    "image": "./images/amoxicillin.jpg"
  },
  "cetirizine": {
  "details": `
    1: Name of the Medicine: Cetirizine
    2: Description: Cetirizine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, itchy or watery eyes, and itching of the throat or nose. It is also used to treat chronic hives.
    3: Dosage: 
    - Adults: 10mg once daily. 
    - Children (6-12 years): 5mg to 10mg once daily, depending on symptoms and doctor's recommendation.
    - Children (2-6 years): 2.5mg to 5mg once daily.
    4: Side Effects: 
    - Drowsiness
    - Dry mouth
    - Fatigue
    - Stomach pain
    - Headache
    5: Drug Interactions: 
    - Avoid combining with sedatives or alcohol as it may increase drowsiness.
    - Be cautious when taken with other antihistamines or sleep-inducing medications.
    6: Precautions: 
    - Use with caution in individuals with liver or kidney issues.
    - Avoid activities requiring alertness if drowsiness occurs.
    - Consult a doctor before use during pregnancy or breastfeeding.
  `,
  "image": "./images/cetirizine.jpg"
},
  "adderall": {
  "details": `
    1: Name of the Medicine: Adderall
    2: Description: Adderall is a combination of amphetamine and dextroamphetamine, used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy. It works by altering certain natural substances in the brain to improve focus, attention, and impulse control.
    3: Dosage: 
       - ADHD: Adults: Typically, 5mg to 40mg daily, divided into two or three doses. Children: Dosage varies based on age and response, generally starting at 2.5mg to 10mg daily.
       - Narcolepsy: Dosages vary; consult your doctor for specifics.
    4: Side Effects: 
       - Insomnia
       - Loss of appetite
       - Weight loss
       - Dry mouth
       - Increased heart rate
       - Nervousness or anxiety
       - Rarely, serious side effects like high blood pressure or cardiac issues.
    5: Drug Interactions: 
       - May interact with MAO inhibitors, other stimulant medications, and certain antidepressants (e.g., SSRIs or SNRIs). 
       - Inform your doctor of all medications you are taking, including herbal supplements.
    6: Precautions: 
       - Not recommended for individuals with a history of heart problems, severe anxiety, or substance abuse. 
       - Use with caution in patients with a history of bipolar disorder or seizures. 
       - Do not abruptly stop Adderall without consulting a doctor, as it may cause withdrawal symptoms.
     `,
    "image": "./images/adderall.jpg"
  },
  "ativan": {
  "details": `
    1: Name of the Medicine: Ativan
    2: Description: Ativan (lorazepam) is a benzodiazepine used to treat anxiety disorders, insomnia, and seizure disorders. It works by enhancing the effect of GABA, a calming neurotransmitter in the brain.
    3: Dosage: Adults: 1mg to 3mg per day, divided into two or three doses, depending on the condition being treated. For insomnia, a single dose of 2mg to 4mg at bedtime is common. Dosage for children should be determined by a doctor.
    4: Side Effects: \n- Drowsiness\n- Dizziness\n- Weakness\n- Fatigue\n- Rarely, confusion, memory issues, or difficulty breathing.
    5: Drug Interactions: \n- May interact with alcohol, opioids, other sedatives, and medications like antihistamines or antidepressants.\n- Inform your doctor of all medications or supplements you are taking.
    6: Precautions: \n- Do not use if allergic to benzodiazepines.\n- Avoid alcohol or operating machinery while taking Ativan.\n- Long-term use may lead to dependence or withdrawal symptoms. Use as prescribed by a doctor.
     `,
    "image": "./images/ativan.jpg"
  },
  "amitriptyline": {
  "details": `
    1: Name of the Medicine: Amitriptyline
    2: Description: Amitriptyline is a tricyclic antidepressant used to treat symptoms of depression. It may also be prescribed for chronic pain, migraines, and certain sleep disorders.
    3: Dosage: Adults: Typically, 25-50mg per day initially, which may be increased up to 150-300mg per day, depending on the condition. Children: Not generally recommended for children under 12 years; dosage varies by condition if prescribed.
    4: Side Effects: \n- Dry mouth\n- Drowsiness\n- Dizziness\n- Constipation\n- Blurred vision\n- Weight gain\n- Rarely, serious effects like irregular heartbeat or mood changes.
    5: Drug Interactions: \n- May interact with monoamine oxidase inhibitors (MAOIs), other antidepressants, sedatives, anticholinergics, and medications affecting heart rhythm.\n- Inform your doctor of all medications and supplements you are taking.
    6: Precautions: \n- Avoid alcohol while taking this medication.\n- Use caution when driving or operating machinery as it may cause drowsiness.\n- Not suitable for individuals with recent heart attack history or severe liver disease.\n- Gradual dose adjustments are necessary when starting or discontinuing the medication.\n- Consult your doctor if you experience suicidal thoughts or significant mood changes.
  `,
  "image": "./images/amitriptyline.jpg"
},
  "atorvastatin": {
  "details": `
    1: Name of the Medicine: Atorvastatin
    2: Description: Atorvastatin is a statin medication used to lower bad cholesterol (LDL) and triglycerides while increasing good cholesterol (HDL) in the blood. It helps reduce the risk of heart attack, stroke, and other cardiovascular complications.
    3: Dosage: Adults: 10mg to 80mg once daily, depending on individual cholesterol levels and treatment goals. Children (10-17 years): 10mg to 20mg once daily for familial hypercholesterolemia.
    4: Side Effects: \n- Muscle pain or weakness\n- Nausea\n- Diarrhea\n- Headache\n- Rarely, liver dysfunction or severe muscle breakdown (rhabdomyolysis).
    5: Drug Interactions: \n- May interact with medications like certain antibiotics (e.g., clarithromycin), antifungals, and other cholesterol-lowering drugs (e.g., gemfibrozil).\n- Grapefruit or grapefruit juice can increase the risk of side effects.
    6: Precautions: \n- Do not use if allergic to statins or have active liver disease.\n- Regularly monitor liver function and lipid levels.\n- Consult a doctor if experiencing unexplained muscle pain, weakness, or dark urine.
     `,
    "image": "./images/atorvastatin.jpg"
  },
  "dextromethorphan": {
  "details": `
    1: Name of the Medicine: Dextromethorphan
    2: Description: Dextromethorphan is a cough suppressant commonly used to treat a dry, irritating cough. It works by reducing the activity in the brain that triggers the cough reflex.
    3: Dosage: Adults and children over 12: 10mg to 20mg every 4 hours, or 30mg every 6-8 hours, with a maximum of 120mg per day. Children: Dosage varies based on age and weight; consult a doctor for guidance.
    4: Side Effects: \n- Drowsiness\n- Dizziness\n- Nausea\n- Stomach upset\n- Rarely, hallucinations or confusion if taken in excessive doses.
    5: Drug Interactions: \n- May interact with monoamine oxidase inhibitors (MAOIs), certain antidepressants, and alcohol.\n- Inform your doctor of all medications you are taking.
    6: Precautions: \n- Do not use if allergic to dextromethorphan.\n- Avoid driving or operating heavy machinery if drowsiness occurs.\n- Do not exceed the recommended dosage, as misuse can cause serious side effects.
     `,
    "image": "./images/dextromethorphan.jpg"
  },
  "ranitidine": {
  "details": `
    1: Name of the Medicine: Ranitidine
    2: Description: Ranitidine is a histamine-2 blocker that reduces the production of stomach acid. It is commonly used to treat and prevent ulcers in the stomach and intestines, acid reflux, and conditions causing excessive stomach acid, such as Zollinger-Ellison syndrome.
    3: Dosage: 
    - Adults: 150mg twice daily or 300mg once daily, usually at bedtime. 
    - Children: Dosage is based on body weight, typically 2mg to 4mg per kg twice daily. Consult a doctor for accurate dosing.
    4: Side Effects: 
    - Headache
    - Constipation
    - Diarrhea
    - Nausea
    - Rarely, liver function abnormalities or allergic reactions.
    5: Drug Interactions: 
    - May interact with drugs like ketoconazole, atazanavir, and certain blood thinners (e.g., Warfarin).
    - Reduces the absorption of certain medications requiring stomach acid, like iron supplements or antifungals.
    6: Precautions: 
    - Avoid long-term use without medical advice as it may mask symptoms of serious conditions.
    - Not recommended for individuals with kidney or liver issues unless prescribed by a doctor.
    - Inform your doctor of any allergies or other medications you are taking.
  `,
  "image": "./images/ranitidine.jpg"
},
  "pantoprazole": {
  "details": `
    1: Name of the Medicine: Pantoprazole (Panta Seed Tablet)
    2: Description: Pantoprazole is a proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach. It is commonly used to treat acid reflux, gastroesophageal reflux disease (GERD), stomach ulcers, and conditions associated with excessive stomach acid like Zollinger-Ellison syndrome.
    3: Dosage: 
    - Adults: 20mg to 40mg once daily, typically taken before meals. For severe conditions, a doctor may recommend twice daily.
    - Children: Dosage varies by age and weight. Consult a doctor for accurate dosing.
    4: Side Effects: 
    - Headache
    - Nausea
    - Diarrhea
    - Stomach pain
    - Rarely, low magnesium levels or allergic reactions.
    5: Drug Interactions: 
    - May interact with medications like clopidogrel, methotrexate, and certain antifungals (e.g., ketoconazole, itraconazole).
    - Reduces the absorption of medications requiring stomach acid, such as iron supplements or calcium carbonate.
    6: Precautions: 
    - Long-term use may increase the risk of bone fractures and vitamin B12 deficiency.
    - Not recommended for individuals with severe liver disease unless advised by a doctor.
    - Take 30 to 60 minutes before meals for best results.
  `,
  "image": "./images/pantoprazole.jpg"
},
  "saredon": {
  "details": `
    1: Name of the Medicine: Saredon Tablet
    2: Description: Saredon is commonly used to treat pain, inflammation, and fever. It is often prescribed for conditions like arthritis, muscle pain, and postoperative pain. Its main active ingredient may vary, so consult a doctor or pharmacist for precise information.
    3: Dosage: 
    - Adults: Typically 1 to 2 tablets daily, depending on the severity of the condition. Follow the doctor’s prescription.
    - Children: Dosage depends on age and weight. Consult a doctor for accurate dosing.
    4: Side Effects: 
    - Nausea
    - Stomach pain
    - Dizziness
    - Rarely, allergic reactions or gastrointestinal bleeding with prolonged use.
    5: Drug Interactions: 
    - May interact with blood thinners (e.g., Warfarin), NSAIDs, or corticosteroids.
    - Inform your doctor about any medications you are currently taking, including supplements.
    6: Precautions: 
    - Avoid prolonged use without medical supervision, as it may cause kidney or liver issues.
    - Take with food or milk to reduce stomach irritation.
    - Not recommended for individuals with severe liver or kidney conditions unless advised by a doctor.
  `,
  "image": "./images/saredon.jpg"
},
  "hydrocortisone cream": {
  "details": `
    1: Name of the Medicine: Hydrocortisone Cream
    2: Description: Hydrocortisone cream is a corticosteroid used to reduce inflammation, redness, and itching caused by skin conditions like eczema, psoriasis, dermatitis, and insect bites.
    3: Dosage: Apply a thin layer to the affected area 1-4 times daily, as directed by a healthcare provider. Avoid using on broken or infected skin unless instructed by a doctor.
    4: Side Effects: 
    - Skin irritation or burning at the application site
    - Dryness or peeling of the skin
    - Prolonged use may cause skin thinning or discoloration
    - Rarely, allergic reactions such as severe itching or swelling
    5: Drug Interactions: 
    - May interact with other topical medications.
    - Inform your doctor about any medications or products you are using on the skin.
    6: Precautions: 
    - Do not use on the face or near the eyes unless prescribed.
    - Not suitable for long-term use or for children without medical advice.
    - Discontinue use and consult a doctor if the condition worsens or does not improve within a week.
  `,
  "image": "./images/hydrocortisone cream.jpg"
},
  "cyclopam": {
  "details": `
    1: Name of the Medicine: Cyclopam
    2: Description: Cyclopam is a combination medication containing Dicyclomine (an antispasmodic) and Paracetamol (an analgesic). It is used to treat abdominal pain, cramps, and spasms associated with conditions like irritable bowel syndrome or menstrual pain.
    3: Dosage: Adults: 1 tablet (Dicyclomine 20mg + Paracetamol 500mg) up to 3 times a day as needed, or as prescribed by the doctor. Children: Dosage depends on age and weight, typically prescribed by a pediatrician.
    4: Side Effects: 
    - Drowsiness
    - Dry mouth
    - Nausea
    - Constipation
    - Dizziness
    - Rarely, allergic reactions such as rash or swelling.
    5: Drug Interactions: 
    - May interact with medications like antihistamines, antidepressants, and other anticholinergic drugs.
    - Inform your doctor of all medications you are taking.
    6: Precautions: 
    - Avoid if allergic to Dicyclomine, Paracetamol, or similar medications.
    - Not recommended for long-term use or in patients with severe liver or kidney disease.
    - Use with caution in elderly patients and those with glaucoma or urinary retention.
    - Consult a doctor if symptoms persist or worsen.
     `,
    "image": "./images/cyclopam.jpg"
  },
  "glimepiride": {
  "details": `
    1: Name of the Medicine: Glimepiride Tablet
    2: Description: Glimepiride is an oral anti-diabetic medication used to control blood sugar levels in individuals with type 2 diabetes. It works by stimulating the pancreas to release insulin and increasing the body’s sensitivity to insulin.
    3: Dosage: 
    - Adults: Typically 1 mg to 4 mg once daily, with a maximum recommended dose of 8 mg per day. Take with breakfast or the first main meal of the day.
    - Children: Not typically prescribed for individuals under 18 years. Consult a doctor for alternatives.
    4: Side Effects: 
    - Hypoglycemia (low blood sugar)
    - Nausea
    - Dizziness
    - Headache
    - Weight gain
    - Rarely, allergic reactions such as skin rash or itching.
    5: Drug Interactions: 
    - May interact with other diabetes medications (e.g., insulin, metformin).
    - Increased risk of hypoglycemia when taken with NSAIDs, alcohol, or beta-blockers.
    - Reduced effectiveness when combined with certain diuretics or corticosteroids.
    6: Precautions: 
    - Monitor blood sugar levels regularly to avoid hypoglycemia or hyperglycemia.
    - Avoid alcohol as it may increase the risk of hypoglycemia.
    - Not recommended for individuals with severe liver or kidney disease.
    - Inform your doctor if you are pregnant, planning to become pregnant, or breastfeeding.
  `,
  "image": "./images/glimepiride.jpg"
},
  "stomach pain": {
  "details": `
    1: Name: Stomach Pain (Abdominal Pain)
    2: Description: Stomach pain refers to discomfort or pain in the abdominal region. It can vary in intensity, duration, and cause. The pain may be dull, sharp, crampy, or burning, depending on the underlying issue.
    3: Possible Causes: 
    - Indigestion
    - Gas and bloating
    - Food poisoning
    - Acid reflux or heartburn
    - Constipation
    - Gastritis or ulcers
    - Appendicitis (requires emergency attention)
    - Gallstones or kidney stones
    - Infections (e.g., stomach flu)
    - Irritable bowel syndrome (IBS)
    - Menstrual cramps (in women)
    4: Associated Symptoms:
    - Nausea or vomiting
    - Diarrhea or constipation
    - Fever
    - Bloating or gas
    - Loss of appetite
    - Blood in stool or vomit (seek emergency care)
    - Severe or persistent pain lasting more than a few hours
    5: Self-Care Tips:
    - Rest and avoid heavy physical activity.
    - Drink warm water or herbal teas (e.g., ginger, peppermint).
    - Use a hot water bottle or heating pad on the abdomen.
    - Avoid spicy, fatty, or acidic foods.
    - Over-the-counter antacids may help for acid reflux.
    - Stay hydrated, especially if experiencing diarrhea or vomiting.
    6: When to Seek Emergency Care:
    - Severe or worsening pain that doesn’t go away.
    - Pain accompanied by fever, chills, or sweating.
    - Difficulty breathing or chest pain.
    - Persistent vomiting or inability to keep liquids down.
    - Blood in stool, vomit, or urine.
    - Sudden sharp pain in the lower right abdomen (possible appendicitis).
    7: Precautions:
    - Do not self-medicate for severe or recurring stomach pain without consulting a doctor.
    - Avoid alcohol and smoking as they can irritate the stomach lining.
    - Avoid consuming food from unhygienic sources to prevent infections.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Overeating or eating too quickly.
    - Skipping meals or prolonged fasting.
    - High intake of spicy, greasy, or processed foods.
    - High stress levels or anxiety, which may worsen IBS or acid reflux.
    - Excessive use of painkillers like NSAIDs, which can harm the stomach lining.
  `,
  "image": "./images/stomach_pain.jpg"
},
  "fever": {
  "details": `
    1: Name: Fever (Pyrexia)
    2: Description: Fever is a temporary increase in body temperature, often due to an underlying condition like an infection. It is the body’s natural response to fight off pathogens and typically occurs above 38°C (100.4°F).
    3: Possible Causes: 
    - Viral or bacterial infections (e.g., flu, COVID-19, pneumonia)
    - Heat exhaustion
    - Inflammatory conditions (e.g., rheumatoid arthritis)
    - Side effects of medications or vaccines
    - Severe sunburn
    - Cancer (rarely, as in lymphoma)
    4: Associated Symptoms:
    - Sweating
    - Chills or shivering
    - Headache
    - Muscle aches
    - Weakness or fatigue
    - Loss of appetite
    - Dehydration
    5: Self-Care Tips:
    - Rest and avoid strenuous activities.
    - Drink plenty of fluids to stay hydrated.
    - Use over-the-counter fever reducers like paracetamol or ibuprofen (consult a doctor if necessary).
    - Use a cool, damp cloth on the forehead or take a lukewarm bath to reduce body temperature.
    - Wear lightweight and comfortable clothing.
    6: When to Seek Emergency Care:
    - Fever above 39.5°C (103°F) or persisting for more than 3 days.
    - Fever accompanied by severe headache, stiff neck, or confusion (signs of meningitis).
    - Difficulty breathing or chest pain.
    - Rash, persistent vomiting, or seizures.
    - In infants younger than 3 months with a fever above 38°C (100.4°F).
    7: Precautions:
    - Do not self-medicate with antibiotics without medical advice.
    - Avoid excessive physical exertion during a fever.
    - Monitor body temperature regularly using a thermometer.
    - Avoid alcohol and caffeine, as they can worsen dehydration.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Exposure to infected individuals during outbreaks.
    - Poor hygiene, which increases infection risk.
    - Overexposure to heat or sun without proper hydration.
    - Incomplete vaccination schedules, especially for preventable diseases.
  `,
  "image": "./images/fever.jpg"
},
  "headache": {
  "details": `
    1: Name: Headache (Cephalalgia)
    2: Description: Headache refers to pain or discomfort in the head, scalp, or neck. It can range from mild to severe and may be caused by various factors, including stress, medical conditions, or environmental triggers.
    3: Possible Causes: 
    - Tension or stress
    - Migraine
    - Sinus infections
    - Dehydration
    - Lack of sleep or irregular sleep patterns
    - Excessive screen time or eye strain
    - High blood pressure
    - Certain foods or drinks (e.g., caffeine, alcohol)
    - Head injuries
    - Serious conditions (e.g., meningitis, brain tumors – rare)
    4: Associated Symptoms:
    - Nausea or vomiting (common in migraines)
    - Sensitivity to light or sound
    - Pressure or tightness around the head (tension headache)
    - Pain behind the eyes or in the forehead (sinus headache)
    - Blurred vision or aura (in migraines)
    5: Self-Care Tips:
    - Rest in a quiet, dark room to reduce symptoms.
    - Stay hydrated by drinking plenty of water.
    - Apply a cold compress to the forehead for migraines or a warm compress for tension headaches.
    - Use over-the-counter pain relievers like paracetamol or ibuprofen (consult a doctor if unsure).
    - Practice relaxation techniques, such as deep breathing or yoga.
    - Limit screen time and take regular breaks.
    6: When to Seek Emergency Care:
    - Sudden, severe headache (worst headache of your life).
    - Headache accompanied by confusion, fainting, or seizures.
    - Vision changes or difficulty speaking.
    - Weakness or numbness on one side of the body.
    - Persistent headache after a head injury.
    - Stiff neck, fever, or sensitivity to light (may indicate meningitis).
    7: Precautions:
    - Avoid skipping meals, as low blood sugar can trigger headaches.
    - Limit caffeine and alcohol consumption.
    - Maintain a consistent sleep schedule.
    - Manage stress through mindfulness or relaxation techniques.
    - Avoid excessive use of painkillers, as this can lead to rebound headaches.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Irregular meal timings or fasting.
    - Poor posture, which can lead to tension headaches.
    - Exposure to bright lights, loud noises, or strong odors.
    - Excessive consumption of processed foods with additives like MSG.
    - Long periods of intense focus without breaks (e.g., studying or working).
  `,
  "image": "./images/headache.jpg"
},
  "cough": {
  "details": `
    1: Name: Cough
    2: Description: Coughing is a reflex action to clear the airways of mucus, irritants, or foreign particles. It can be acute (short-term) or chronic (long-term) and is a common symptom of various respiratory conditions.
    3: Possible Causes:
    - Viral infections (e.g., common cold, flu)
    - Bacterial infections (e.g., bronchitis, pneumonia)
    - Allergies (e.g., pollen, dust mites)
    - Asthma
    - Smoking or exposure to secondhand smoke
    - Gastroesophageal reflux disease (GERD)
    - Post-nasal drip (mucus dripping down the throat)
    - Air pollution or environmental irritants
    - Chronic obstructive pulmonary disease (COPD)
    - Medications (e.g., ACE inhibitors)
    4: Associated Symptoms:
    - Sore throat
    - Mucus production (clear, yellow, or green)
    - Shortness of breath
    - Chest tightness or pain
    - Wheezing or whistling sound when breathing
    - Fatigue
    5: Self-Care Tips:
    - Stay hydrated to help thin mucus.
    - Use honey or ginger in warm tea to soothe the throat.
    - Gargle with warm saltwater to relieve throat irritation.
    - Avoid smoking or exposure to smoke.
    - Use a humidifier to keep the air moist.
    - Take over-the-counter cough suppressants or expectorants (consult a doctor if unsure).
    - Rest and avoid strenuous activities.
    6: When to Seek Emergency Care:
    - Coughing up blood or unusual sputum.
    - Persistent cough lasting more than 3 weeks.
    - Severe shortness of breath or wheezing.
    - Chest pain or tightness.
    - Difficulty swallowing or speaking.
    - High fever (above 101.4°F or 38.5°C) with a cough.
    7: Precautions:
    - Avoid triggers like allergens or smoke.
    - Maintain a clean environment to reduce irritants.
    - Wash hands regularly to prevent infections.
    - Limit the use of over-the-counter cough medications without guidance.
    - Avoid lying flat if experiencing coughing due to GERD.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Exposure to cold, dry air.
    - Consumption of spicy or acidic foods (in cases of GERD).
    - Excessive coughing, which can lead to throat irritation or injury.
    - Talking loudly or shouting for extended periods.
    - Engaging in vigorous physical activity during a coughing episode.
  `,
  "image": "./images/cough.jpg"
},
  "fungus": {
  "details": `
    1: Name: Fungal Infection
    2: Description: Fungal infections are caused by fungi that thrive in warm, moist environments. These infections can affect the skin, nails, hair, or internal organs. Common fungal infections include athlete's foot, ringworm, and yeast infections.
    3: Possible Causes:
    - Poor hygiene or not keeping the skin dry
    - Weakened immune system (e.g., due to diabetes, HIV)
    - Close contact with infected individuals or animals
    - Humid or warm environments
    - Antibiotic use, which can disturb the natural balance of bacteria
    - Sharing personal items (e.g., towels, shoes)
    - Fungal spores in the air
    4: Associated Symptoms:
    - Red, itchy, or inflamed skin
    - Scaly or flaky patches of skin
    - Blisters or bumps
    - Discoloration or thickening of the nails
    - Vaginal itching or discharge (for yeast infections)
    - Pain or discomfort when touching the affected area
    5: Self-Care Tips:
    - Keep the affected area clean and dry.
    - Use antifungal creams or powders available over-the-counter.
    - Wear loose, breathable clothing and footwear to reduce moisture.
    - Avoid scratching the infected area to prevent spreading the infection.
    - Wash hands regularly, especially after touching the infected area.
    - Disinfect items like towels or bedding to avoid reinfection.
    6: When to Seek Emergency Care:
    - Severe pain or swelling in the affected area.
    - Fever or chills with signs of infection.
    - Worsening of symptoms despite using over-the-counter treatments.
    - Recurring or persistent infections in the same area.
    - Infections spreading to the bloodstream or internal organs (e.g., in immunocompromised individuals).
    7: Precautions:
    - Avoid sharing personal items with others.
    - Wear shoes in public places like swimming pools or locker rooms.
    - Maintain a healthy immune system by eating a balanced diet and exercising.
    - Avoid wearing tight clothing or shoes that can trap moisture.
    - Take prescribed medications as directed to treat fungal infections.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Prolonged moisture exposure (e.g., wearing sweaty socks for extended periods).
    - Use of antibiotics without medical supervision, which can disrupt the natural balance of bacteria.
    - Close contact with individuals or animals with fungal infections.
    - Frequent visits to places with high humidity, like saunas or public showers.
    - Poor foot hygiene or wearing non-breathable shoes.
  `,
  "image": "./images/fungus.jpg"
},
"dog bite": {
  "details": `
    1: Name: Dog Bite
    2: Description: A dog bite occurs when a dog bites a person, potentially leading to injury or infection. It can range from a minor scratch to more severe wounds. Dog bites are common but can carry risks, especially if the dog is unvaccinated.
    3: Possible Causes:
    - Provoking or startling the dog
    - The dog feeling threatened or scared
    - Lack of proper training or socialization in dogs
    - Aggressive behavior or territoriality in certain dog breeds
    - Stray or unvaccinated dogs
    4: Associated Symptoms:
    - Pain or swelling at the bite site
    - Redness or bruising around the wound
    - Bleeding or broken skin
    - Pus or discharge if the wound becomes infected
    - Fever or chills (in case of infection)
    5: Self-Care Tips:
    - Clean the wound immediately with soap and water.
    - Apply an antiseptic and cover the wound with a clean bandage.
    - Seek medical attention for deep or severe bites.
    - Keep the affected area elevated to reduce swelling.
    - Monitor for signs of infection, such as increased redness or warmth.
    6: When to Seek Emergency Care:
    - The wound is deep or the bleeding doesn't stop.
    - The dog that bit you was acting abnormally or showing signs of rabies.
    - You are unsure of the dog’s vaccination history (especially rabies).
    - You experience symptoms like fever, swelling, or red streaks spreading from the bite.
    7: Precautions:
    - Avoid approaching unfamiliar dogs, especially those showing signs of aggression.
    - Vaccinate pets against rabies and other diseases.
    - Ensure your dog is properly trained and socialized to reduce aggressive tendencies.
    - Report any stray or unvaccinated dogs to local authorities.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Provoking or teasing dogs.
    - Approaching dogs that are eating, sleeping, or caring for puppies.
    - Ignoring signs of anxiety or stress in dogs (e.g., growling, baring teeth).
  `,
  "image": "./images/dog bite.jpg"
},
  "snake bite": {
  "details": `
    1: Name: Snake Bite
    2: Description: A snake bite occurs when a snake uses its fangs to inject venom into a person’s skin. It can cause severe symptoms, including pain, swelling, and in some cases, life-threatening conditions. Immediate medical attention is critical.
    3: Possible Causes:
    - Walking barefoot in areas where snakes are common (e.g., forests, tall grass, or near water).
    - Disturbing or threatening a snake, causing it to bite in self-defense.
    - Handling or attempting to catch a snake without proper knowledge.
    4: Associated Symptoms:
    - Immediate pain at the bite site, which may spread.
    - Swelling, bruising, or discoloration at the bite area.
    - Nausea, vomiting, or dizziness.
    - Difficulty breathing or swallowing (in severe cases).
    - Rapid heartbeat or low blood pressure.
    - Signs of systemic poisoning, such as weakness, confusion, or paralysis.
    5: Self-Care Tips:
    - Remain as calm and still as possible to slow the spread of venom.
    - Avoid applying ice or tourniquets to the bite site.
    - Keep the bite site below the level of the heart to reduce venom flow.
    - Seek immediate medical attention, even if the snake is non-venomous.
    6: When to Seek Emergency Care:
    - Immediate medical care is required for all snake bites.
    - Severe symptoms like difficulty breathing, bleeding, or paralysis.
    - Bite from a venomous snake or if the species is unknown.
    - Swelling or pain that worsens rapidly.
    7: Precautions:
    - Wear protective clothing (e.g., boots) when walking in areas known for snakes.
    - Avoid handling or disturbing snakes.
    - Educate yourself on local venomous snake species and their characteristics.
    - Carry a first aid kit with a snake bite suction device if you're in a snake-prone area.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Walking in snake-prone areas without being alert.
    - Attempting to handle or provoke snakes.
    - Ignoring safety protocols when hiking or exploring wilderness areas.
  `,
  "image": "./images/snake bite.jpg"
},
  "vomiting": {
  "details": `
    1: Name: Vomiting
    2: Description: Vomiting is the forceful expulsion of stomach contents through the mouth. It can occur due to various causes such as infections, food poisoning, motion sickness, or underlying medical conditions.
    3: Possible Causes:
    - Gastrointestinal infections (e.g., viral, bacterial)
    - Food poisoning or food intolerances
    - Motion sickness or travel sickness
    - Pregnancy (morning sickness)
    - Migraine or severe headaches
    - Stress or anxiety
    - Overeating or consuming spoiled food
    - Certain medications (e.g., chemotherapy)
    - Underlying conditions (e.g., ulcers, gastritis)
    4: Associated Symptoms:
    - Nausea or queasiness before vomiting
    - Stomach cramps or discomfort
    - Sweating or dizziness
    - Loss of appetite or dehydration
    - Fever (if infection is the cause)
    5: Self-Care Tips:
    - Stay hydrated by sipping small amounts of water or electrolyte drinks.
    - Rest and avoid strong smells or foods that could trigger further vomiting.
    - Avoid solid food until vomiting subsides, then slowly reintroduce bland foods like toast or crackers.
    - Try anti-nausea medications or ginger tea to help reduce nausea.
    6: When to Seek Emergency Care:
    - Vomiting persists for more than 24 hours.
    - Signs of dehydration (dry mouth, dark urine, dizziness).
    - Vomiting blood or material that looks like coffee grounds.
    - Severe stomach pain or cramping.
    - If the vomiting is caused by a head injury or after recent surgery.
    7: Precautions:
    - Avoid consuming food or drinks that are known to trigger vomiting.
    - Take medications as prescribed and avoid self-medicating.
    - Avoid heavy meals or excessive alcohol consumption.
    - Take breaks and rest during travel if prone to motion sickness.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Eating contaminated or spoiled food.
    - Overeating or consuming large meals quickly.
    - Ignoring signs of nausea and continuing activities that may worsen symptoms.
    - Exposing yourself to strong odors or stress-inducing situations.
  `,
  "image": "./images/vomiting.jpg"
},
  "motions": {
  "details": `
    1: Name: Diarrhea (Motions)
    2: Description: Diarrhea refers to frequent, loose, or watery stools. It can be caused by infections, food intolerances, or digestive disorders. Diarrhea can lead to dehydration if not properly managed.
    3: Possible Causes:
    - Viral or bacterial infections (e.g., norovirus, E. coli)
    - Food poisoning or consumption of contaminated food
    - Food intolerances (e.g., lactose intolerance)
    - Stress or anxiety
    - Irritable bowel syndrome (IBS)
    - Certain medications (e.g., antibiotics)
    - Digestive disorders (e.g., Crohn's disease, celiac disease)
    4: Associated Symptoms:
    - Frequent loose or watery stools
    - Abdominal cramping or discomfort
    - Bloating or gassiness
    - Nausea or vomiting (in some cases)
    - Fever (if infection is present)
    - Dehydration (dry mouth, dark urine, dizziness)
    5: Self-Care Tips:
    - Drink plenty of fluids, especially oral rehydration solutions or electrolyte drinks.
    - Avoid caffeinated, alcoholic, or sugary beverages that can worsen dehydration.
    - Eat bland, easy-to-digest foods such as toast, rice, and bananas.
    - Rest and avoid any strenuous activities that may worsen symptoms.
    - Use over-the-counter medications (e.g., loperamide) for symptom relief, if necessary.
    6: When to Seek Emergency Care:
    - Diarrhea lasts more than 2 days or becomes severe.
    - Signs of dehydration, such as dizziness, dry mouth, or reduced urine output.
    - Blood or mucus in the stool.
    - Severe abdominal pain or cramping.
    - Fever exceeding 102°F (39°C).
    7: Precautions:
    - Wash hands frequently to avoid spreading infections.
    - Avoid consuming unclean or poorly cooked food.
    - Limit consumption of high-fat or spicy foods during diarrhea.
    - Follow proper food storage and hygiene practices.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Stressful or anxiety-inducing situations that may trigger IBS or functional diarrhea.
    - Consuming contaminated or spoiled food.
    - Ignoring symptoms of mild diarrhea that could lead to more severe dehydration.
  `,
  "image": "./images/motions.jpg"
},
  "heart attack": {
  "details": `
    1: Name: Heart Attack (Myocardial Infarction)
    2: Description: A heart attack occurs when the blood flow to a part of the heart muscle becomes blocked, leading to tissue damage. It is a medical emergency and can be life-threatening if not treated immediately.
    3: Possible Causes:
    - Blockage of coronary arteries due to fatty deposits (atherosclerosis)
    - Blood clots that form in the arteries
    - Spasms of the coronary arteries
    - High blood pressure or cholesterol levels
    - Smoking, poor diet, and lack of physical activity
    - Family history of heart disease
    - Stress and anxiety
    - Diabetes or obesity
    4: Associated Symptoms:
    - Chest pain or discomfort (pressure, tightness, or heaviness)
    - Pain radiating to the arms, back, neck, jaw, or stomach
    - Shortness of breath or difficulty breathing
    - Nausea, lightheadedness, or dizziness
    - Cold sweat or clammy skin
    - Fatigue or weakness
    5: Self-Care Tips:
    - Call emergency services immediately if you suspect a heart attack.
    - If you're not allergic to aspirin, chew one aspirin to help thin the blood (only if advised by a healthcare provider).
    - Stay calm and rest until medical help arrives.
    - Avoid exerting yourself or doing anything strenuous.
    6: When to Seek Emergency Care:
    - Chest pain or discomfort lasting more than a few minutes or coming in waves.
    - Severe shortness of breath, nausea, or dizziness.
    - Pain radiating to the left arm, back, or jaw.
    - If you experience any of the symptoms above, call emergency services immediately.
    7: Precautions:
    - Follow a heart-healthy diet, rich in fruits, vegetables, and whole grains.
    - Exercise regularly to improve cardiovascular health.
    - Avoid smoking and limit alcohol intake.
    - Manage stress and practice relaxation techniques.
    - Regularly check blood pressure, cholesterol, and blood sugar levels.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - High-fat or processed foods.
    - Chronic stress and lack of sleep.
    - Lack of physical activity.
    - Smoking and excessive alcohol consumption.
  `,
  "image": "./images/heart attack.jpg"
},
  "brain tumor": {
  "details": `
    1: Name: Brain Tumor
    2: Description: A brain tumor is an abnormal growth of cells within the brain or surrounding tissue. It can be benign (non-cancerous) or malignant (cancerous), and it can affect brain function, depending on its location.
    3: Possible Causes:
    - Genetic mutations or family history of brain tumors
    - Exposure to radiation or environmental toxins
    - Certain inherited genetic syndromes (e.g., neurofibromatosis)
    - Age, as brain tumors are more common in older adults
    - Weakened immune system or certain medical conditions
    4: Associated Symptoms:
    - Persistent headaches, often worsening in the morning or with coughing
    - Seizures or convulsions
    - Nausea or vomiting, especially in the morning
    - Vision problems, such as blurred vision or double vision
    - Difficulty speaking, walking, or balancing
    - Memory problems, confusion, or changes in personality
    - Weakness or numbness on one side of the body
    5: Self-Care Tips:
    - Monitor any persistent or worsening symptoms and consult a doctor.
    - Follow any treatment plan prescribed by a healthcare provider, including surgery, radiation, or chemotherapy if applicable.
    - Maintain a healthy lifestyle, focusing on nutrition and rest.
    6: When to Seek Emergency Care:
    - Sudden onset of severe headache or vision changes.
    - Difficulty speaking, walking, or breathing.
    - Sudden onset of seizures or loss of consciousness.
    - Severe confusion or behavioral changes that are not typical.
    7: Precautions:
    - Regular health check-ups, especially if there is a family history of brain tumors.
    - Avoid exposure to known environmental toxins or radiation.
    - Seek medical attention for persistent neurological symptoms.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Lack of proper sleep and chronic stress.
    - Exposure to harmful substances or environmental toxins.
    - Ignoring early warning signs like persistent headaches or vision changes.
  `,
  "image": "./images/brain tumor.jpg"
},
  "eye pain": {
  "details": `
    1: Name: Eye Pain
    2: Description: Eye pain can refer to discomfort, soreness, or sharp pain in or around the eye. It can be caused by various factors, including infections, eye strain, or underlying conditions.
    3: Possible Causes:
    - Eye strain or fatigue (from prolonged screen time or reading)
    - Dry eyes or lack of lubrication
    - Conjunctivitis (pink eye)
    - Foreign objects or particles in the eye
    - Glaucoma (increased pressure inside the eye)
    - Sinus infection or sinusitis
    - Eye infections (e.g., stye, blepharitis)
    - Trauma or injury to the eye
    - Corneal abrasions or ulcers
    4: Associated Symptoms:
    - Redness or swelling around the eye
    - Blurred vision or difficulty seeing clearly
    - Sensitivity to light (photophobia)
    - Watery eyes or discharge
    - Headache or facial pain
    - Feeling of something stuck in the eye
    5: Self-Care Tips:
    - Rest your eyes and avoid prolonged screen time.
    - Use artificial tears or lubricating eye drops if eyes feel dry.
    - Apply a warm compress to the eyes to relieve pain and reduce swelling.
    - Protect your eyes from bright lights by wearing sunglasses.
    - If you wear contact lenses, remove them and switch to glasses until the pain subsides.
    6: When to Seek Emergency Care:
    - Sudden, severe pain in the eye.
    - Vision loss or sudden changes in vision.
    - Persistent pain that does not improve with home remedies.
    - Pain following an eye injury or trauma.
    - Discharge from the eye that is green or yellow.
    7: Precautions:
    - Avoid rubbing your eyes to prevent further irritation or injury.
    - Take regular breaks when using digital devices (follow the 20-20-20 rule).
    - Wear protective eyewear when engaging in activities that may cause eye injury.
    - Keep your environment clean to avoid infections.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Prolonged screen time without breaks.
    - Exposure to smoke, dust, or other irritants.
    - Not wearing sunglasses in bright or sunny environments.
    - Poor hygiene, especially when handling contact lenses.
  `,
  "image": "./images/eye pain.jpg"
},
  "body pain": {
  "details": `
    1: Name: Body Pain
    2: Description: Body pain refers to discomfort, soreness, or aching throughout the body. It can range from mild to severe and may be caused by various factors, including muscle strain, inflammation, or infections.
    3: Possible Causes:
    - Muscle strain or overuse (e.g., from exercise or physical activity)
    - Infections (e.g., flu, cold, viral infections)
    - Fibromyalgia (chronic pain condition)
    - Arthritis or joint inflammation
    - Stress or anxiety
    - Poor posture or ergonomics
    - Dehydration or electrolyte imbalances
    - Autoimmune conditions (e.g., lupus)
    4: Associated Symptoms:
    - Soreness, stiffness, or aching muscles
    - Swelling or inflammation in the affected areas
    - Fatigue or weakness
    - Fever (infections or inflammatory conditions)
    - Tenderness in joints or muscles
    - Difficulty moving or performing normal activities
    5: Self-Care Tips:
    - Rest and avoid overexertion to allow muscles to recover.
    - Apply heat or cold packs to relieve muscle pain and reduce inflammation.
    - Stay hydrated to help reduce muscle cramping.
    - Practice gentle stretching or yoga to alleviate stiffness.
    - Over-the-counter pain relievers like ibuprofen or paracetamol can help relieve mild pain.
    6: When to Seek Emergency Care:
    - Severe, sudden body pain without an obvious cause.
    - Body pain accompanied by fever, fatigue, or weight loss (could be a sign of an infection or autoimmune disorder).
    - Pain after a fall or injury that may indicate fractures or internal damage.
    - Difficulty breathing, chest pain, or symptoms of a heart attack.
    7: Precautions:
    - Maintain good posture to prevent muscle strain or joint pain.
    - Warm up and cool down before and after exercise to avoid injury.
    - Manage stress and practice relaxation techniques to avoid muscle tension.
    - Stay active to prevent muscle stiffness, but avoid overexertion.
    8: Lifestyle and Behavioral Triggers to Avoid:
    - Prolonged periods of inactivity or sitting in one position.
    - Overtraining or pushing the body beyond its limits.
    - Exposure to cold or damp conditions without proper protection.
    - Ignoring signs of muscle strain or discomfort during physical activity.
  `,
  "image": "./images/body pain.jpg"
}












};

// Display Messages
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;

    // Display message with a <pre> tag to preserve formatting
    if (sender === 'bot') {
        const preTag = document.createElement('pre');
        preTag.textContent = message;
        messageDiv.appendChild(preTag);
    } else {
        messageDiv.textContent = message;
    }

    document.getElementById('messages').appendChild(messageDiv);
}

// Display Medicine Details
function getMedicineDetails(medicine) {
    const medicineDetails = medicineData[medicine.toLowerCase()];
    if (medicineDetails) {
        displayMessage(medicineDetails.details, 'bot');
        document.getElementById('medicineImg').src = medicineDetails.image;
        document.getElementById('medicineImg').alt = medicine;
        document.getElementById('medicineImage').style.display = 'block';
        document.getElementById('listenBtn').disabled = false;
    } else {
        displayMessage('Sorry, we could not find the medicine you are looking for.', 'bot');
    }
}

// Handle the listen button functionality
function listenToDetails() {
    const medicineName = document.getElementById('medicineInput').value.trim();
    const medicineDetails = medicineData[medicineName.toLowerCase()];
    if (medicineDetails) {
        const utterance = new SpeechSynthesisUtterance(medicineDetails.details);
        window.speechSynthesis.speak(utterance);
        document.getElementById('stopBtn').disabled = false;
    }
}

// Stop the speech
function stopListening() {
    window.speechSynthesis.cancel();
    document.getElementById('stopBtn').disabled = true;
}

// Start the speech recognition for mic button
function startMicRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    
    recognition.start();

    recognition.onresult = function(event) {
        const medicineName = event.results[0][0].transcript;
        document.getElementById('medicineInput').value = medicineName;
        displayMessage(`You said: ${medicineName}`, 'user');
        getMedicineDetails(medicineName);
    };

    recognition.onerror = function(event) {
        displayMessage('Sorry, I couldn\'t understand that. Please try again.', 'bot');
    };
}

// Add event listeners
document.getElementById('searchBtn').addEventListener('click', () => {
    const medicineName = document.getElementById('medicineInput').value.trim();
    getMedicineDetails(medicineName);
});

document.getElementById('micBtn').addEventListener('click', startMicRecognition);
document.getElementById('listenBtn').addEventListener('click', listenToDetails);
document.getElementById('stopBtn').addEventListener('click', stopListening);
