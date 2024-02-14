import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
    View,
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      paddingVertical:30,
      paddingHorizontal: 20,
      fontSize:12
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
    },
    section: {
      display: "flex",
      flexDirection: "col",
      gap:6,
      margin: 10,
      paddingHorizontal: 10,
    },
    parragraph: {
      fontSize: 12,
      textAlign: "justify",
      lineHeight: 1.5,
      margin: 10,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    }
  });
  
  function PDF() {
    return (
      <Document>
        <Page style={styles.page} size={"A4"}>
                <View style={{display:"flex"}}>
                <Text style={{textAlign: "center",fontSize:14}} >PSYCHIATRIC OUTPATIENT CLINIC</Text>
                <Text style={{textAlign: "center",fontSize:14}}>123 Main Street</Text>
                <Text style={{textAlign: "center",fontSize:14}}>Anywhere, US 12345-6789</Text>
                </View>
            <View style={{marginTop:20}}>
                <Text style={styles.title}>Complete Evaluation: Gemini</Text>
            </View>
            <View style={{marginTop:13}}>
                <Text>
                    Date of Exam: 6/8/2016
                </Text>
                <Text>
                    Time of Exam: 5:22:37 PM
                </Text>
            </View>
            <View style={{marginTop:13}}>
                <Text>Patient Name: Little, Aimee</Text>
                <Text>Patient Number: 1000010659748</Text>
            </View>
          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >History: </Text>
            <Text>
                Mrs. Little is a widowed Canadian 38 year old woman. Her chief complaint is, "I am completely miserable since
                my dear husband died."
                The following information was provided by:
                Mrs. Little
                Mrs. Little's family.
                Mrs. Little describes symptoms of a depressive disorder. She reports that there is a precipitant for her depression. Mrs.
                Little's current depressive symptoms are attributed to the death of an important person in her life, details are as follows:
                "My husband died of cancer three months ago." Depressive symptoms began insidiously over a period of months. She
                describes episodes of chronic or daily depression
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Current Symptoms: </Text>
            <Text>
                She reports that her appetite is decreased. Some weight loss has occurred. She reports a weight
                loss of more than five pounds. She reports the weight change as occurring over the following timeframe: One Month.
                Concentration difficulty associated with her depressive symptoms have been reported. Mrs. Little reports that her mind
                often wanders. She reports "Crying Spells" or episodes. Feelings of sadness have been reported. She reports difficulty
                sleeping. Insomnia is reported.
                Suicidality: She denies suicidal ideas or intentions. Denial is convincing.
                Prior Depressive /Manic Episodes: She reports that there have been no prior depressive episodes. Mrs. Little does
                not have a history of manic or hypomanic episodes.
                Severity/ Complexity: Based on the risk of morbidity without treatment and her description of interference with
                functioning, severity is estimated to be moderate.
                Mrs. Little has symptoms of anxiety. Anxiety symptoms have been present for months. Anxiety symptoms are occurring
                daily. She reports occurrences of difficulty concentrating. Feelings of restlessness are described. Difficulty sleeping is
                occurring. There is difficulty falling asleep. She describes an exaggerated startle response. 
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Past Psychiatric History:</Text>
            <Text>
                There is no history of Mrs. Little ever having experienced withdrawal from any substance. 
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Suicidal/Self Injurious:</Text>
            <Text>
                Mrs. Little has no history of suicidal or self injurious behavior.  
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Addiction/Use History: </Text>
            <Text>
                Mrs. Little denies any history of substance abuse.   
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Psychotropic Medication History: </Text>
            <Text>
                Psychotropic medications have never been prescribed for Mrs. Little.    
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Social/Developmental History: </Text>

            <Text>Mrs. Little is a widowed 38 year old woman. She is Canadian. She is a Christian.</Text>
            <Text>Relationship/Marriage:</Text>
            <Text>Mrs. Little is a widow.</Text>
            <Text>Children:</Text>
            <Text>Mrs. Little has three adult children.</Text>

            <Text>Barriers to Treatment:</Text>
            <Text>Emotional:</Text>
            <Text>*Emotional or psychological problems are a barrier to treatment success: Emotional problems will be addressed
            via the treatment plan. (Profound grief.)</Text>

            <Text>Client's Goals:</Text>
            <Text>“I just want to feel better.”   </Text>

          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Family History: </Text>
            <Text>Father known to have anxiety.</Text>
            <Text>Sister thought to have depression.</Text>
            <Text>Daughter treated as outpatient for a learning disorder.</Text>
            <Text>Family psychiatric history is otherwise negative. There is no other history of psychiatric disorders, psychiatric treatment
            or hospitalization, suicidal behaviors or substance abuse in closely related family members.</Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Diagnoses: </Text>
            <Text>
            Adjustment disorder with depressed mood, F43.21 (ICD-10) (Active)</Text>
            <Text>Generalized anxiety disorder, F41.1 (ICD-10) (Active) 
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Instructions / Recommendations: </Text>
            <Text>
            A clinic or outpatient treatment setting is recommended because patient is impaired to the degree that there is
            relatively mild interference with interpersonal /occupational functioning.     
            </Text>
          </View>
  
          <View style={styles.pageNumber}>
              <Text render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} />
          </View>
        </Page>
      </Document>
    );
  }
  
  export default PDF;