const danh_sach_ki_thi = {
  1: {
    TenKiThi: "Giữa kì môn Lập trình web",
    Loai: "Tự do",
    danh_sach_cau_hoi: {
      1: {
        de_bai: "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
        danh_sach_dap_an: {
          A: "Tầng 1",
          B: "Tầng 2",
          C: "Tầng 3",
          D: "Tầng 4",
        },
        dap_an_dung: "A",
      },
      2: {
        de_bai: "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
        danh_sach_dap_an: {
          A: "Tầng 1",
          B: "Tầng 2",
          C: "Tầng 3",
          D: "Tầng 4",
        },
        dap_an_dung: "A",
      },
      3: {
        de_bai: "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
        danh_sach_dap_an: {
          A: "Tầng 1",
          B: "Tầng 2",
          C: "Tầng 3",
          D: "Tầng 4",
        },
        dap_an_dung: "A",
      },
    },
  },
};

const bai_lam = {
  ma_de: 1,
  phieu_tra_loi: ["A", "B", "B"],
  thoi_gian_lam: "0:22:12",
};

function onPageLoad() {
  const ma_de = bai_lam["ma_de"];
  const phieu_tra_loi = bai_lam["phieu_tra_loi"];
  const thoi_gian_lam = bai_lam["thoi_gian_lam"];

  const ki_thi = danh_sach_ki_thi[ma_de];
  const ds_cauhoi = Object.values(ki_thi["danh_sach_cau_hoi"]);

  let questionTotal = Object.values(ds_cauhoi).length;
  let correctAnswerTotal = 0;
  let incorrectAnswerTotal = 0;
  let score = 0;

  for (let i = 0; i < ds_cauhoi.length; i++) {
    const cauhoi = ds_cauhoi[i];
    const questionBox = document.createElement("div");
    const questionContainer = document.createElement("div");

    if (phieu_tra_loi[i] === cauhoi.dap_an_dung) {
      correctAnswerTotal += 1;
    }

    questionBox.className = "question-box";
    questionContainer.innerHTML = `
        <div>
            <div class="topic">
                <span style="font-size: 18px; font-weight: 600">Câu ${
                  i + 1
                }:</span>
                <span
                    >${cauhoi.de_bai}</span
                >
                </div>
                <div class="list-answer">
                    <div class="answer ${
                      phieu_tra_loi[i] === "A" && "answer-incorrect"
                    } 
                    ${cauhoi.dap_an_dung === "A" && "answer-correct"}">A. ${
      cauhoi.danh_sach_dap_an["A"]
    }</div>

                    <div class="answer ${
                      phieu_tra_loi[i] === "B" && "answer-incorrect"
                    } 
                    ${cauhoi.dap_an_dung === "B" && "answer-correct"}">B. ${
      cauhoi.danh_sach_dap_an["B"]
    }</div>

                    <div class="answer ${
                      phieu_tra_loi[i] === "C" && "answer-incorrect"
                    } 
                    ${cauhoi.dap_an_dung === "C" && "answer-correct"}">C. ${
      cauhoi.danh_sach_dap_an["C"]
    }</div>
    
                    <div class="answer ${
                      phieu_tra_loi[i] === "D" && "answer-incorrect"
                    } 
                    ${cauhoi.dap_an_dung === "D" && "answer-correct"}">D. ${
      cauhoi.danh_sach_dap_an["D"]
    }</div>
                </div>
            </div>
        </div>
  `;
    questionBox.appendChild(questionContainer);
    document.getElementById("list-question").appendChild(questionBox);
  }

  incorrectAnswerTotal = questionTotal - correctAnswerTotal;
  score = ((correctAnswerTotal / questionTotal) * 10).toFixed(1);

  document.getElementById("exam-name").innerText =
    danh_sach_ki_thi[ma_de]["TenKiThi"];
  document.getElementById("question-total").innerText = questionTotal;
  document.getElementById("correct-answer-total").innerText =
    correctAnswerTotal;
  document.getElementById("score").innerText = score;
  document.getElementById("exam-time").innerText = thoi_gian_lam;

  document.getElementById("correct-answer-total").innerText =
    correctAnswerTotal;

  document.getElementById("correct-box").innerText = correctAnswerTotal;
  document.getElementById("incorrect-box").innerText = incorrectAnswerTotal;
  document.getElementById("score-box").innerText = score;
}

window.addEventListener("load", onPageLoad);
