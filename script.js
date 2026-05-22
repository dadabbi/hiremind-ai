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

    let feedback = "";

// 짧은 답변
if(answer.length < 30) {

  feedback =
  `${username}님의 답변은 ${job} 직무 기준으로 분석되었습니다. ` +

  "현재 답변의 길이가 짧아 핵심 역량이 충분히 드러나지 않았습니다. " +

  "실제 경험이나 프로젝트 사례를 추가하면 더 설득력 있는 답변 구성이 가능합니다.";

}

// 중간 길이 답변
else if(answer.length >= 30 && answer.length < 100) {

  feedback =
  `${username}님의 답변은 ${job} 직무 기준으로 분석되었습니다. ` +

  "전반적으로 안정적인 답변 흐름이 확인되었습니다. " +

  "다만 직무 관련 경험이나 구체적인 성과를 함께 제시하면 전달력이 더욱 향상될 수 있습니다.";

}

// 긴 답변
else {

  feedback =
  `${username}님의 답변은 ${job} 직무 기준으로 분석되었습니다. ` +

  "답변의 구성과 흐름이 비교적 안정적으로 분석되었으며, 직무 적합성을 표현하려는 요소가 효과적으로 드러났습니다. ";

}

// 키워드 추가 분석
if(answer.includes("책임감")) {

  feedback +=
  "책임감 관련 표현이 포함되어 신뢰도 측면에서 긍정적으로 분석되었습니다. ";

}

if(answer.includes("협업")) {

  feedback +=
  "협업 역량 표현이 포함되어 커뮤니케이션 능력이 강조되었습니다. ";

}

if(answer.includes("문제 해결")) {

  feedback +=
  "문제 해결 관련 키워드가 포함되어 실무 대응 역량이 강조되었습니다. ";

}

if(answer.includes("성장")) {

  feedback +=
  "성장 의지와 자기개발 성향이 긍정적으로 분석되었습니다. ";

}

feedback +=
"AI 텍스트 패턴 분석 기반 피드백이 제공되었습니다.";

    // 피드백 출력
    document.getElementById("feedbackText").innerText =
    feedback;

    // 로딩 종료
    document.getElementById("loadingText").innerText =
    "분석 완료";

  }, 2000);
}
