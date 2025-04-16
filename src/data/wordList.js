const wordList = [
  { english: "achieve", korean: "성취하다" },
  { english: "alternative", korean: "대안" },
  { english: "applicant", korean: "지원자" },
  { english: "benefit", korean: "이익, 혜택" },
  { english: "confirm", korean: "확인하다" },
  { english: "consider", korean: "고려하다" },
  { english: "deliver", korean: "배달하다" },
  { english: "efficient", korean: "효율적인" },
  { english: "employee", korean: "직원" },
  { english: "employer", korean: "고용주" },
  { english: "estimate", korean: "견적, 추정" },
  { english: "expand", korean: "확장하다" },
  { english: "facilitate", korean: "촉진하다" },
  { english: "fund", korean: "자금" },
  { english: "guarantee", korean: "보장하다" },
  { english: "immediately", korean: "즉시" },
  { english: "improve", korean: "개선하다" },
  { english: "increase", korean: "증가하다" },
  { english: "interview", korean: "면접" },
  { english: "invoice", korean: "송장" },
  { english: "launch", korean: "출시하다" },
  { english: "maintain", korean: "유지하다" },
  { english: "manage", korean: "관리하다" },
  { english: "market", korean: "시장" },
  { english: "negotiate", korean: "협상하다" },
  { english: "notify", korean: "알리다" },
  { english: "offer", korean: "제안하다" },
  { english: "order", korean: "주문" },
  { english: "participate", korean: "참여하다" },
  { english: "performance", korean: "성과" },
  { english: "policy", korean: "정책" },
  { english: "position", korean: "직책, 위치" },
  { english: "postpone", korean: "연기하다" },
  { english: "prepare", korean: "준비하다" },
  { english: "process", korean: "과정, 처리하다" },
  { english: "product", korean: "제품" },
  { english: "promote", korean: "홍보하다, 승진시키다" },
  { english: "proposal", korean: "제안" },
  { english: "purchase", korean: "구매하다" },
  { english: "raise", korean: "올리다, 임금 인상" },
  { english: "recommend", korean: "추천하다" },
  { english: "reduce", korean: "줄이다" },
  { english: "refund", korean: "환불" },
  { english: "register", korean: "등록하다" },
  { english: "relocate", korean: "이전하다" },
  { english: "require", korean: "요구하다" },
  { english: "reserve", korean: "예약하다" },
  { english: "resign", korean: "사임하다" },
  { english: "responsibility", korean: "책임" },
  { english: "schedule", korean: "일정, 일정 잡다" },
  { english: "strategy", korean: "전략" },

  

  { english: "account", korean: "계좌, 설명하다" },
  { english: "acquire", korean: "획득하다" },
  { english: "adjust", korean: "조정하다" },
  { english: "affordable", korean: "알맞은 가격의" },
  { english: "agenda", korean: "의제, 일정" },
  { english: "agreement", korean: "계약, 합의" },
  { english: "analyze", korean: "분석하다" },
  { english: "annual", korean: "연례의" },
  { english: "appeal", korean: "호소하다, 매력" },
  { english: "approval", korean: "승인" },
  { english: "assemble", korean: "조립하다, 모이다" },
  { english: "assignment", korean: "과제, 임무" },
  { english: "attract", korean: "끌다, 유인하다" },
  { english: "authorize", korean: "권한을 부여하다" },
  { english: "aware", korean: "알고 있는" },
  { english: "balance", korean: "잔액, 균형" },
  { english: "bankrupt", korean: "파산한" },
  { english: "board", korean: "이사회, 탑승하다" },
  { english: "branch", korean: "지점, 가지" },
  { english: "budget", korean: "예산" },
  { english: "candidate", korean: "후보자" },
  { english: "capacity", korean: "수용 능력" },
  { english: "career", korean: "경력" },
  { english: "certificate", korean: "증명서" },
  { english: "client", korean: "고객" },
  { english: "colleague", korean: "동료" },
  { english: "commercial", korean: "상업의, 광고" },
  { english: "competition", korean: "경쟁" },
  { english: "complaint", korean: "불만" },
  { english: "component", korean: "부품, 구성 요소" },
  { english: "conference", korean: "회의" },
  { english: "confirm", korean: "확인하다" },
  { english: "construction", korean: "건설" },
  { english: "contract", korean: "계약" },
  { english: "contribute", korean: "기여하다" },
  { english: "convenient", korean: "편리한" },
  { english: "cooperate", korean: "협력하다" },
  { english: "current", korean: "현재의" },
  { english: "customer", korean: "고객" },
  { english: "deadline", korean: "마감일" },
  { english: "decrease", korean: "감소하다" },
  { english: "department", korean: "부서" },
  { english: "description", korean: "설명, 묘사" },
  { english: "development", korean: "개발" },
  { english: "device", korean: "장치" },
  { english: "distribution", korean: "유통, 분배" },
  { english: "donate", korean: "기부하다" },
  { english: "earn", korean: "벌다" },
  { english: "editor", korean: "편집자" },
  { english: "effective", korean: "효과적인" },
  { english: "electronic", korean: "전자적인" },
  { english: "employee", korean: "직원" },
  { english: "engage", korean: "관여하다, 약속하다" },
  { english: "evaluate", korean: "평가하다" },
  { english: "exceed", korean: "초과하다" },
  { english: "executive", korean: "임원, 경영 간부" },
  { english: "expense", korean: "비용" },
  { english: "export", korean: "수출하다" },
  { english: "feature", korean: "특징, 특징으로 하다" },
  { english: "feedback", korean: "피드백, 반응" },
  { english: "finance", korean: "재정, 자금" },
  { english: "frequent", korean: "빈번한" },
  { english: "goal", korean: "목표" },
  { english: "growth", korean: "성장" },
  { english: "handle", korean: "처리하다" },
  { english: "headquarters", korean: "본사" },
  { english: "import", korean: "수입하다" },
  { english: "income", korean: "수입" },
  { english: "industry", korean: "산업" },
  { english: "instruction", korean: "지시, 설명" },
  { english: "insurance", korean: "보험" },
  { english: "interest", korean: "이자, 관심" },
  { english: "investment", korean: "투자" },
  { english: "item", korean: "항목, 물품" },
  { english: "labor", korean: "노동" },
  { english: "legal", korean: "법적인" },
  { english: "limit", korean: "제한" },
  { english: "loan", korean: "대출" },
  { english: "management", korean: "경영, 관리" },
  { english: "manufacturer", korean: "제조업자" },
  { english: "memo", korean: "메모" },
  { english: "merger", korean: "합병" },
  { english: "mission", korean: "임무, 사명" },
  { english: "network", korean: "네트워크" },
  { english: "objective", korean: "목표" },
  { english: "operate", korean: "운영하다" },
  { english: "organization", korean: "조직" },
  { english: "outcome", korean: "결과" },
  { english: "outsourcing", korean: "외주" },
  { english: "overall", korean: "전반적인" },
  { english: "overtime", korean: "초과근무" },
  { english: "packaging", korean: "포장" },
  { english: "partner", korean: "파트너, 동업자" },
  { english: "payroll", korean: "급여 명세서" },
  { english: "potential", korean: "잠재력" },
  { english: "preference", korean: "선호" },
  { english: "productivity", korean: "생산성" },
  { english: "profit", korean: "이익" },
  { english: "project", korean: "프로젝트" },
  { english: "provider", korean: "공급자" },
  { english: "quality", korean: "품질" },
  { english: "quotation", korean: "견적" },
  { english: "range", korean: "범위" },
  { english: "receipt", korean: "영수증" },
  { english: "record", korean: "기록, 녹음하다" },
  { english: "recruit", korean: "채용하다" },
  { english: "reliable", korean: "신뢰할 수 있는" },
  { english: "representative", korean: "대표자" },
  { english: "revenue", korean: "수익" },
  { english: "risk", korean: "위험" },
  { english: "salary", korean: "급여" },
  { english: "satisfaction", korean: "만족" },
  { english: "secure", korean: "안전한, 확보하다" },
  { english: "shipment", korean: "선적, 배송" },
  { english: "significant", korean: "중요한" },
  { english: "solution", korean: "해결책" },
  { english: "stock", korean: "주식, 재고" },
  { english: "subsidiary", korean: "자회사" },
  { english: "supply", korean: "공급하다" },
  { english: "support", korean: "지원하다" },
  { english: "survey", korean: "설문조사" },
  { english: "target", korean: "목표로 삼다, 목표" },
  { english: "transaction", korean: "거래" },
  { english: "transportation", korean: "운송" },
  { english: "trend", korean: "추세" },
  { english: "value", korean: "가치" },
  { english: "warehouse", korean: "창고" },
  { english: "warranty", korean: "보증" },
  { english: "wholesale", korean: "도매" },
]

export default wordList;