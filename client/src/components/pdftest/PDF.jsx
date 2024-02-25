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
                <Text style={{textAlign: "center",fontSize:14}} >CLINIC</Text>
                </View>
            <View style={{marginTop:20}}>
                <Text style={styles.title}>Complete Evaluation: Gemini</Text>
            </View>
            <View style={{marginTop:13}}>
                <Text>
                    Date of Exam: 25/02/2024
                </Text>
                <Text>
                    Time of Exam: 3:20 PM
                </Text>
            </View>
            <View style={{marginTop:13}}>
                <Text>Patient Name: Sagnik Saha</Text>
                <Text>Patient Number: 1230002</Text>
            </View>
          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >History: </Text>
            <Text>
            Sagnik has a history of mental health concerns, including Adjustment Disorder with Depressed Mood and Generalized Anxiety Disorder.
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Current Symptoms: </Text>
            <Text>
            Sagnik is experiencing symptoms of depression, such as persistent sadness, loss of interest or pleasure in activities, feelings of worthlessness or guilt, and difficulty concentrating. Additionally, he exhibits symptoms of anxiety, including excessive worry, restlessness, muscle tension, and irritability. 
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Past Psychiatric History:</Text>
            <Text>
            Sagnik has a history of mental health issues, including previous episodes of depression and anxiety.            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Suicidal/Self Injurious:</Text>
            <Text>
            There is no current indication of suicidal or self-injurious behavior; however, Sagnik reports occasional thoughts of hopelessness and despair. 
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Addiction/Use History: </Text>
            <Text>
            There is no reported history of substance abuse or addiction.
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Psychotropic Medication History: </Text>
            <Text>
            Sagnik has previously been prescribed psychotropic medications for depression and anxiety, including selective serotonin reuptake inhibitors (SSRIs) and benzodiazepines.
            </Text>
          </View>

          {/* <View style={styles.section}>
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

          </View> */}

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Family History: </Text>
            <Text>Father known to have anxiety.</Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Diagnoses: </Text>
            <Text>
            Adjustment disorder with depressed mood</Text>
            <Text>Generalized anxiety disorder
            </Text>
          </View>

          <View style={styles.section}>
            {/* <Image src={nextLogo} /> */}
            <Text style={{fontSize:16,fontWeight:"demibold"}} >Instructions / Recommendations: </Text>
            <Text>
            It is recommended that Sagnik receive treatment in a clinic or outpatient setting. This setting allows for regular monitoring and support while allowing him to maintain his daily activities. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy (IPT), may be beneficial in addressing his symptoms. Additionally, medication management by a psychiatrist can help alleviate symptoms of depression and anxiety. Sagnik should also be encouraged to engage in self-care practices, such as regular exercise, healthy eating, and relaxation techniques, to support his mental well-being. Follow-up appointments should be scheduled to monitor his progress and adjust treatment as needed.    
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