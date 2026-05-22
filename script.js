function analyzeAnswer() {

    const username = document.getElementById("username").value;
    const job = document.getElementById("job").value;
    const answer = document.getElementById("answer").value;
  
    if(answer.trim() === "") {
      alert("답변을 입력해주세요");
      return;
    }
  
    document.getElementById("loadingText").innerText =
    "AI가 답변을 분석하는 중입니다...";
  
    setTimeout(() => {
        document.getElementById("resultBox").style.display = "block";
      let confidence = Math.floor(Math.random() * 30) + 70;
      let logic = Math.floor(Math.random() * 30) + 65;
      let active = Math.floor(Math.random() * 30) + 60;
  
      if(answer.length < 50) {
        confidence -= 15;
        logic -= 10;
      }
  
      if(answer.includes("책임감")) {
        confidence += 5;
      }
  
      if(answer.includes("협업")) {
        active += 5;
      }
  
      if(answer.includes("성장")) {
        logic += 5;
      }
  
      confidence = Math.min(confidence, 100);
      logic = Math.min(logic, 100);
      active = Math.min(active, 100);
  
      document.getElementById("confidenceBar").style.width =
      confidence + "%";
  
      document.getElementById("logicBar").style.width =
      logic + "%";
  
      document.getElementById("activeBar").style.width =
      active + "%";
  
      document.getElementById("confidenceText").innerText =
      confidence + "점";
  
      document.getElementById("logicText").innerText =
      logic + "점";
  
      document.getElementById("activeText").innerText =
      active + "점";
  
      let feedback = "";
  
      if(answer.length < 50) {
        feedback +=
        "답변이 다소 짧습니다. 구체적인 경험을 추가해보세요. ";
      } else {
        feedback +=
        "답변의 길이가 적절합니다. ";
      }
  
      if(answer.includes("책임감")) {
        feedback +=
        "책임감 키워드가 긍정적으로 분석되었습니다. ";
      }
  
      if(answer.includes("협업")) {
        feedback +=
        "협업 역량이 잘 드러납니다. ";
      }
  
      if(answer.includes("성장")) {
        feedback +=
        "성장 의지가 강조되어 좋은 인상을 줍니다. ";
      }
  
      feedback +=
      `${username}님의 ${job} 면접 답변은 전체적으로 안정적으로 분석되었습니다.`;
  
      document.getElementById("feedbackText").innerText =
      feedback;
  
      document.getElementById("loadingText").innerText =
      "분석 완료";
  
    }, 2000);
  }