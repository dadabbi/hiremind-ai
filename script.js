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

    document.getElementById("resultBox").style.display =
    "block";

    let confidence = 40;
    let logic = 40;
    let active = 40;

    // 답변 길이 기반 점수 상승
    if(answer.length > 30) {
      confidence += 10;
      logic += 10;
      active += 10;
    }

    if(answer.length > 80) {
      confidence += 15;
      logic += 15;
      active += 15;
    }

    if(answer.length > 150) {
      confidence += 20;
      logic += 20;
      active += 20;
    }

    // 짧은 답변 감점
    if(answer.length < 50) {
      confidence -= 15;
      logic -= 10;
    }

    // 너무 짧으면 강제 저점
    if(answer.length < 10) {
      confidence = 15;
      logic = 10;
      active = 20;
    }

    // 키워드 분석
    if(answer.includes("책임감")) {
      confidence += 10;
    }

    if(answer.includes("협업")) {
      active += 10;
    }

    if(answer.includes("성장")) {
      logic += 10;
    }

    if(answer.includes("문제 해결")) {
      logic += 10;
    }

    if(answer.includes("소통")) {
      active += 10;
    }

    if(answer.includes("도전")) {
      confidence += 10;
    }

    // 최대 점수 제한
    confidence = Math.min(confidence, 100);
    logic = Math.min(logic, 100);
    active = Math.min(active, 100);

    // 그래프 반영
    document.getElementById("confidenceBar").style.width =
    confidence + "%";

    document.getElementById("logicBar").style.width =
    logic + "%";

    document.getElementById("activeBar").style.width =
    active + "%";

    // 점수 텍스트 출력
    document.getElementById("confidenceText").innerText =
    confidence + "점";

    document.getElementById("logicText").innerText =
    logic + "점";

    document.getElementById("activeText").innerText =
    active + "점";

    // 피드백 생성
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

    if(answer.includes("문제 해결")) {
      feedback +=
      "문제 해결 역량이 확인되었습니다. ";
    }

    if(answer.includes("소통")) {
      feedback +=
      "커뮤니케이션 역량이 긍정적으로 분석되었습니다. ";
    }

    feedback +=
    `${username}님의 ${job} 면접 답변은 전체적으로 안정적으로 분석되었습니다.`;

    feedback +=
    " 키워드 기반 텍스트 패턴 분석이 수행되었습니다.";

    // 피드백 출력
    document.getElementById("feedbackText").innerText =
    feedback;

    // 로딩 종료
    document.getElementById("loadingText").innerText =
    "분석 완료";

  }, 2000);
}
