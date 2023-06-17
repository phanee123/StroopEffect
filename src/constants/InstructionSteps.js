// TODO: Add clear Steps
import sound1 from "../assets/instructionaudio1.mp3";
import sound2 from "../assets/instructionaudio2.mp3";

const INSTRUCTION_STEPS_TEST1 = [
  {
    stepIndex: 1,
    content: `
          <h3>Welcome to the experiment!</h3>
          <p>
            Attention is the ability to focus and concentrate on relevant stimuli. 
            As we cannot process all the information that is bombarding our sensory channels, 
            we filter or partially block out some inputs while we allow or perceive other information. 
            studies shows that we often attend selectively to one task at a time. 
            However, according to the Parallel Processing model we can attend to some parts of both sets of inputs at the same time.
.
          </p>
          <p>
          The Stroop Effect Experiment is a classic psychological study that examines the interference caused by conflicting information in our cognitive processing. John Ridley Stroop was the first person to do the Stroop test (1935). In this experiment, participants are presented with a list of color words printed in incongruent ink colors. For example, the word "RED" may be printed in blue ink. The participants are then asked to name the ink color while ignoring the word itself. The Stroop Effect occurs when the participants experience a delay or difficulty in correctly identifying the ink color due to the interference caused by reading the word. This experiment highlights the automaticity of reading and the challenge it poses in overcoming interference when processing conflicting information.
          </p>`,

    buttonLabel2: "Next",
  },

  {
    stepIndex: 2,
    content: `
          <h2>Conditions to be followed while conducting the experiment / Precautions!</h2>
          <p>The student or the subject will have to sit 1 ft away from the screen.</p>
          <p>The subject will have to sit comfortably in a quiet and well-ventilated room.</p>
          <p>If the subject is using phone/ tab to conduct the experiment then it is mandatory for him/her to put the phone on
           Do Not Disturb (DND) mode in order to avoid any disruptions.</p>
          <p>Please keep a note book and a pen while you are conducting the experiment 
           because you will have to note down some information.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `
          <h2>General Instructions</h2>
          <h4>Note:This experiment has to be written in your record book. Please adhere to the below format.</h4>
          <p>1.Introduction</p>
          <p>2.Materials required</p>
          <p>3.Purpose</p>
          <p>4.Particulars of the subject/student [Name,Enrollment No,Age,Date]</p>
          <p>5.Procedure for conduction</p>
          <p>6.Results</p>
          <p>7.Discussions</p>
          <p>8.Conclusion</p>
          <p>9.Practical application</p>
          `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 4,
    content: `
      <p>Please note that this experiment has 3 conditions. Be alert as each condition has specific instructions. / ఈ ప్రయోగానికి 3 కండిషన్స్ ఉన్నాయని దయచేసి గమనించండి. ప్రతి షరతుకు నిర్దిష్ట సూచనలు ఉన్నందున అప్రమత్తంగా ఉండండి.</p>
      <p>After clicking on the End instructions button below, you will find ‘Ready’ word as a signal to begin the experiment./ END Instructions బటన్‌పై క్లిక్ చేసిన తర్వాత, మీరు ప్రయోగాన్ని ప్రారంభించడానికి సంకేతంగా ‘రెడీ’ (READY) పదం కనిపిస్తుంది.</p>
    
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 5,
    content: `
      <h4><u>Now we will begin the experiment!</u></h4>
      <h4><u>ఇప్పుడు  ప్రయోగం ప్రారంభమవుతుంది</u></h4>
      <h3>Instructions</h3>
      <h3>Condition 1 - Color words</h3>
      <p>You will find few Color words being displayed on the screen. At the bottom of your screen, 
        you will find buttons/options with 4 different colors along with text/ మీకు స్క్రీన్ పైన రంగులలో పదాలు  మరియు  స్క్రీన్ దిగువన 4 విభిన్న రంగులలో పదాల బటన్‌లు/ఆప్షన్‌లు కనిపిస్తాయి.</p>
      <p>You will find each color word being underlined one after the other, beginning from the 1st word / మీరు బటన్/ఆప్షన్‌పై  క్లిక్ చేసిన ప్రతిసారి రంగుల పదం క్రింద అండర్లైన్ గమనిస్తారు</p>
      <p>You will have to respond by clicking on the appropriate button/option below that matches with the word that is underlined. 
        Example if the word underlined is yellow you will have to click on the yellow button/option below / అండర్‌లైన్ చేయబడిన పదానికి సరిపోయేలా స్పందించడానికి క్రింద తగిన బటన్/ఆప్షన్‌పై క్లిక్ చేయండి. ఉదాహరణకి అండర్‌లైన్ చేయబడిన పదం పసుపు రంగులో ఉంటే, మీరు పసుపు బటన్/ఆప్షన్‌పై క్లిక్ చేయాలి..</p>
      
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },

  {
    stepIndex: 6,
    content: `
       
      <p>The underlined line will keep moving in sequence as you proceed / మీరు కొనసాగిస్తున్నప్పుడు అండర్‌లైన్ చేయబడిన లైన్ వరుసగా కదులుతూ ఉంటుంది.</p>
      <p>Serially, continue responding as quickly and correctly as possible / వరుసగా, వీలైనంత త్వరగా మరియు సరిగ్గా స్పందించడం కొనసాగించండి.</p>
      <p>After completion you will proceed to the next condition of the experiment / ఈ కండిషన్ పూర్తయిన తర్వాత మీరు ప్రయోగం యొక్క 
      తదుపరి కండిషన్ కి కొనసాగుతారు</p>
    
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 7,
    content: `<p>Condition 1 of the experiment will begin after clicking on the <b>End instructions</b> button below / <b>End instructions</b>బటన్‌పై క్లిక్ చేసిన తర్వాత ప్రయోగం యొక్క కండిషన్-1 ప్రారంభమవుతుంది.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_TEST2 = [
  {
    stepIndex: 1,
    content: `
      <h2>Instructions</h2>
      <h2>Condition 2 - Colors without text </h2>
      <p>You will find rows of strips in different colors. At the bottom of your screen, you will find buttons/options with 4 different colors along with text / మీరు వివిధ రంగులలో  స్ట్రిప్స్ (---) వరుసలు  కనుగొంటారు. మీ స్క్రీన్ దిగువన,  టెక్స్ట్‌తో పాటు 4 విభిన్న రంగులతో బటన్‌లు/ఆప్షన్‌లను ఉంటాయి.</p>
      <p>Each color strip will be highlighted one after the other, beginning from the 1st color strip / ప్రతి రంగు స్ట్రిప్ ఒకదాని తర్వాత ఒకటి హైలైట్ చేయబడుతుంది</p>
      <p>You will have to respond by clicking on the appropriate button/option below that matches with the color strip that is highlighted. For Example. 
      If the color strip highlighted is in red ink then you will have to click on the red button/option below / హైలైట్ చేయబడిన కలర్ స్ట్రిప్‌తో సరిపోయే  క్రింది బటన్/ఆప్షన్‌పై క్లిక్ చేయండి. ఉదాహరణకి. హైలైట్ చేయబడిన కలర్ స్ట్రిప్ ఎరుపు సిరాలో (Ink) ఉన్నట్లయితే, మీరు దిగువ ఎరుపు బటన్/ఆప్షన్‌పై క్లిక్ చేయాలి.</p>  
    `,
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 2,
    content: `
        
      <p>The highlight will keep moving in sequence as you proceed / మీరు కొనసాగిస్తున్నప్పుడు ఒకదాని తర్వాత ఒక రంగు స్ట్రిప్ హైలైట్ చేయబడి క్రమంగా కదులుతూ ఉంటుంది.</p>
      <p>Serially, continue responding as quickly and correctly as possible along with the highlighted color strip till you respond to all of them / వరుసగా, వీలైనంత త్వరగా మరియు సరిగ్గా స్పందించడం కొనసాగించండి.</p>
      <p>After completion you will proceed to the next condition / ఈ కండిషన్ పూర్తయిన తర్వాత మీరు ప్రయోగం యొక్క 
       తదుపరి కండిషన్ కి కొనసాగుతారు.</p>
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 3,
    content: `<p>Condition 2 of the experiment will begin after clicking on the End instructions button below /  <b>End instructions</b> బటన్‌పై క్లిక్ చేసిన తర్వాత ప్రయోగం యొక్క కండిషన్-2 ప్రారంభమవుతుంది</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_TEST3 = [
  {
    stepIndex: 1,
    content: `
      <h2>Instructions</h2>
      <h2>Condition 3 - words of colors displayed in different Ink</h2>
      <p>You will find few color words displayed. The color of the word and the actual meaning of the word are
       different in this condition. For example, word blue will be seen in red color / మీ  స్క్రీన్ పై కొన్ని రంగులలో పదాలు  కనిపిస్తాయి. ఈ స్థితిలో పదం యొక్క రంగు మరియు పదం యొక్క అసలు అర్థం భిన్నంగా ఉంటాయి. ఉదాహరణకు, నీలం అనే పదం ఎరుపు రంగులో కనిపిస్తుంది.</p>
      <p>At the bottom of your screen, you will find buttons/options with 4 different colors along with text / స్క్రీన్ దిగువన 4 విభిన్న రంగులలో పదాల బటన్‌లు/ఆప్షన్‌లు కనిపిస్తాయి.</p
      <p>You will find each color word being underlined one after the other, beginning from the 1st word / మీరు బటన్/ఆప్షన్‌పై  క్లిక్ చేసిన ప్రతిసారి రంగుల పదం క్రింద అండర్లైన్ గమనిస్తారు</p>
      
      `,
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 2,
    content: `
      <p>You will have to respond by choosing the button/option that matches the displayed ink/color of the text. 
        For example, if the word green is displayed in yellow color, your wright answer would be yellow / మీ స్క్రీన్ పై కనిపించే పదం యొక్క రంగుకు సరిపోయే బటన్/ఆప్షన్పై క్లిక్ చేయండి. ఉదాహరణకు, ఆకుపచ్చ పదం పసుపు రంగులో కనిపిస్తే, మీరు పసుపు రంగులో ఉన్న బటన్/ఆప్షన్ ను క్లిక్ చేయాల్సి ఉంటుంది.</p>
      <p>The underlined line will keep moving in sequence as you proceed / మీరు కొనసాగిస్తున్నప్పుడు అండర్‌లైన్ చేయబడిన లైన్ వరుసగా కదులుతూ ఉంటుంది.</p>
      <p>continue responding serially as quickly and correctly as possible along with the underlined word till you respond to all of them / మీరు వీలైనంత త్వరగా మరియు సరిగ్గా అండర్‌లైన్ చేసిన రంగుకు సరిపోయే ఆప్షన్ ని  ఎంపిక చేసుకుంటూ ఈ క్రమాన్ని పూర్తి చేయగలరు.</p>
    `,
    buttonLabel2: "Next",
    buttonLabel1: "Previous",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 3,
    content: `<p>Condition-3 of the experiment will start after you click <b>End instructions.</b> / <b>End instructions</b> బటన్‌పై క్లిక్ చేసిన తర్వాత ప్రయోగం యొక్క కండిషన్-3 ప్రారంభమవుతుంది</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
  },
];

export {
  INSTRUCTION_STEPS_TEST1,
  INSTRUCTION_STEPS_TEST2,
  INSTRUCTION_STEPS_TEST3,
};

// // {
//   stepIndex: 0,
//   content: `
//         <h2>Please enter your details</h2>
//         <div style="display: flex; flex-direction: column; gap: 10px;">
//           <div style="display: flex; align-items: center; flex-basis: 0;">
//             <label style="font-weight: bold; margin-right: 10px; flex-basis: 200px;" for="Username">Username:</label>
//             <input style="flex-grow: 1; flex-basis: 0;" type="text" id="Username"/>
//           </div>
//           <div style="display: flex; align-items: center; flex-basis: 0;">
//             <label style="font-weight: bold; margin-right: 10px; flex-basis: 200px;" for="Roll Number">Roll Number:</label>
//             <input style="flex-grow: 1; flex-basis: 0;" type="text" id="Roll Number"/>
//           </div>
//           <div style="display: flex; align-items: center; flex-basis: 0;">
//             <label style="font-weight: bold; margin-right: 10px; flex-basis: 200px;" for="Date">Date:</label>
//             <input style="width: 119%;"flex-grow: 1; flex-basis: 0;" type="date" id="Date"/>
//           </div>
//         </div>
//   `,
//   buttonLabel2: "Next",
// },
