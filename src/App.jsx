import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, Brain, Briefcase, Camera, ChartLineUp, CurrencyDollar,
  Database, Envelope, FileXls, GraduationCap, House, InstagramLogo, MapPin,
  Medal, PaperPlaneTilt, Play, PresentationChart, Quotes, Robot, Sparkle,
  Strategy, Trophy, TrendUp, User, WechatLogo, X
} from "@phosphor-icons/react";

const data = {
  name: "KAIXUAN HUANG",
  role: "Financial Analyst · AI Engineer",
  intro: [
    "Originally from Taiwan, I have lived across both sides of the Taiwan Strait, including more than ten years in mainland China. I am currently back in Taiwan for university.",
    "I am committed to translating frontier artificial-intelligence technologies into tangible business value. My work combines in-depth financial-market analysis with applied AI, spanning U.S. equity research, portfolio allocation, quantitative-strategy development and the implementation of enterprise AI solutions. Feel free to message me—let’s exchange ideas and grow together."
  ],
  email: "kaixuanhuang293@gmail.com",
  sketchImage: "/assets/kaixuan-sketch-cutout.png",
  idFront: "/assets/id-front.jpg",
  heroTags: ["AI", "Technology", "Stock", "Finance"],
  wins: [
    { medal: "01", title: "Harvard Business Proposal Competition", result: "Champion of China" },
    { medal: "02", title: "University of Pennsylvania Social Entrepreneurship Competition", result: "Champion of Taiwan" },
    { medal: "04", title: "Young Investors Society", result: "Certified Young Investment Analyst" },
    { medal: "05", title: "Student Investment Challenge", result: "Global 1st · 300,000% in 35 Trade Days" },
  ],
  projects: [
    { id: 1, category: "Stock Tools", title: "Consecutive SIC Investment Champion", subtitle: "S14 & S15 Regional Champion", image: "/assets/project-sic-champion.jpg", shortText: "Achieved consecutive championship results in the SIC Investment Challenge through disciplined portfolio construction, market timing and risk management.", longText: "This achievement reflects the practical application of equity research, portfolio allocation and active risk management. Across two consecutive seasons, the strategy maintained strong performance while adapting to changing market conditions.", tags: ["Portfolio Strategy", "Equity Research", "Risk Management", "Market Timing"] },
    { id: 2, category: "Stock Tools", title: "Certified Young Investment Analyst", subtitle: "Investment Research and Portfolio Analysis", image: "/assets/project-cyia.jpg", shortText: "Completed the Certified Young Investment Analyst designation, covering company research, valuation, portfolio construction and investment decision-making.", longText: "The certification strengthened my foundation in financial statement analysis, equity valuation and portfolio strategy. These principles are applied throughout my investment research and stock-analysis projects.", tags: ["Fundamental Analysis", "Valuation", "Portfolio Management", "Investment Research"] },
    { id: 3, category: "Product", title: "PennSEM Social Entrepreneurship Champion", subtitle: "Champion — Taiwan", image: "/assets/project-pennsem.jpg", shortText: "Won the Taiwan championship in the PennSEM Social Entrepreneurship Competition with a commercially viable solution designed around measurable social impact.", longText: "The project combined user needs, social impact and business sustainability into one structured proposal. It required product positioning, market analysis, revenue-model design and persuasive presentation.", tags: ["Product Strategy", "Social Innovation", "Business Model", "Market Validation"] },
    { id: 4, category: "Product", title: "Youth Innovation Community", subtitle: "Learning Through Real-World Projects", image: "/assets/project-youth-community.png", shortText: "A student innovation community built around entrepreneurship, investment, teamwork and project-based learning.", longText: "The initiative connects students through practical competitions, workshops and team projects. Participants move from idea generation to research, presentation and execution, turning classroom knowledge into real-world experience.", tags: ["Community Building", "Entrepreneurship Education", "Project-Based Learning", "Student Engagement"] },
    { id: 5, category: "AI & Algorithms", title: "Autonomous Trading Decision Engine", subtitle: "Real-Time Market Analysis and Execution Logic", image: "/assets/project-trading-engine.png", shortText: "An AI-driven trading system that processes live market data, evaluates multiple execution strategies and selects actions based on liquidity, volatility and risk.", longText: "The system receives real-time price feeds, scans market opportunities and routes each trade through a structured decision engine. It evaluates midpoint execution, limit orders, position holding and dynamic hedging before selecting an execution path.\n\nThe full process is visualized so users can understand not only what decision was made, but why it was made.", tags: ["Real-Time Data", "Strategy Selection", "Execution Algorithms", "Risk Monitoring", "Explainable Decisions"] },
    { id: 6, category: "AI & Algorithms", title: "Quantum Life Simulator", subtitle: "AI-Powered Scenario and Decision Simulation", image: "/assets/project-quantum-life.jpg", shortText: "An interactive simulation system that transforms personal dilemmas into structured life scenarios and generates possible outcomes based on user priorities and decisions.", longText: "The simulator analyzes user input, identifies competing priorities and generates multiple possible life paths. Rather than offering a single answer, it allows users to compare outcomes involving career, income, relationships, health and personal ambition.\n\nThe system uses branching decision logic and weighted user preferences to simulate alternative futures. Each choice changes the probability and direction of later outcomes, creating a personalized decision experience.", tags: ["Scenario Simulation", "Decision Engine", "Branching Logic", "Personalized AI"] },
    { id: 7, category: "Product", title: "GIC & TSC Business Simulation Platform", subtitle: "Experiential Learning for Business and Finance", image: "/assets/project-gic-tsc.jpeg", shortText: "A competition-based learning platform designed to help students develop financial literacy, business judgment and cross-disciplinary problem-solving skills.", longText: "The platform combines business simulation, investment decision-making and team competition into an applied learning experience. Participants analyze changing market conditions, allocate resources and make strategic decisions under pressure.\n\nThe project was designed not only as a competition, but as a structured educational product connecting theory with practical execution.", tags: ["Competition Platform", "Financial Education", "Business Simulation", "Experiential Learning", "Product Operations"] },
  ],
  marketFocus: [
    { icon: ChartLineUp, label: "Global Equities", text: "Fundamental research across industries, cycles and regions." },
    { icon: CurrencyDollar, label: "Portfolio Allocation", text: "Risk-aware allocation, sizing and performance attribution." },
    { icon: Robot, label: "AI × Finance", text: "AI-assisted data processing and financial-research workflows." },
  ],
  citySketch: "/assets/taiwan-shanghai-finance-sketch.png",
  skills: [
    [ChartLineUp, "Fundamental Analysis"], [FileXls, "Financial Modeling"], [Strategy, "Portfolio Allocation"],
    [Database, "Market Data"], [Brain, "AI Research"], [PresentationChart, "Data Visualization"],
    [Robot, "Quantitative Trading"], [TrendUp, "Risk Management"],
  ],
};

const nav = [
  ["home", House, "Home"], ["experience", Briefcase, "Experience"], ["wins", Trophy, "Wins"],
  ["projects", PresentationChart, "Projects"], ["skills", Brain, "Skills"], ["contact", Envelope, "Contact"]
];

const zhTW = {
  "PROFILE · KAIXUAN HUANG · FINANCIAL ANALYST · AI ENGINEER": "個人簡介 · 黃楷軒 · 金融分析師 · AI 工程師",
  "KAIXUAN HUANG": "黃楷軒", "KAIXUAN HUANG · 2026": "黃楷軒 · 2026",
  "A personal corner of the internet": "個人簡介",
  "Hello I’m": "你好，我是",
  "Financial Analyst · AI Engineer": "金融分析師 · AI 工程師",
  "Originally from Taiwan, I have lived across both sides of the Taiwan Strait, including more than ten years in mainland China. I am currently back in Taiwan for university.": "來自臺灣，往返兩岸，在大陸生活超過十年；目前回到臺灣就讀大學。",
  "I am committed to translating frontier artificial-intelligence technologies into tangible business value. My work combines in-depth financial-market analysis with applied AI, spanning U.S. equity research, portfolio allocation, quantitative-strategy development and the implementation of enterprise AI solutions. Feel free to message me—let’s exchange ideas and grow together.": "致力於將前沿的人工智慧技術轉化為實際的商業價值。我擅長結合深度金融市場分析與 AI 應用，從美股研究、投資組合配置到量化策略開發，同時推動 AI 解決方案在企業端的具體落地。歡迎大家私訊我，共同交流成長。",
  "Originally from Taiwan, I previously resided in Shanghai. Currently I am an undergraduate student based back in Taiwan.": "我生於臺灣，也曾在上海生活；如今重返臺灣，展開大學階段的學習旅程。",
  "With practical experience working as a financial-analyst practitioner, I regularly deploy AI-driven tools to process market datasets, conduct fundamental analysis and streamline financial-research workflows. My research interests cover global equities, portfolio allocation and the integration of artificial intelligence within the investment industry.": "我具備財務分析實務經驗，經常運用 AI 工具處理市場資料、進行基本面分析並優化金融研究流程。我的研究興趣涵蓋全球股票、投資組合配置，以及人工智慧在投資產業中的應用。",
  "I’m open-minded to connect with industry professionals and university peers to discuss market outlooks and tech-enabled finance trends.": "我始終樂於與業界前輩及大學同儕相遇交流，一同探討市場的下一步，以及科技如何重新描繪金融的未來。",
  "A little context": "關於我",
  "Between places,": "跨越兩地，",
  "always curious.": "不斷尋求思維與技術的突破。",
  "My core expertise lies in combining financial-data analysis with artificial intelligence. Whether developing quantitative-trading strategies, leading large-scale commercial projects or building intelligent AI systems, I aim to use technology to create concrete and executable business value.": "核心專長在於結合金融數據分析與人工智慧。無論是開發量化交易、推動大型商業專案，還是建構 AI 智能系統，我都期許能透過技術賦能，創造具體且可執行的商業價值。",
  "Based in Taiwan": "現居臺灣", "NSYSU · Department of Finance": "國立中山大學 · 財務管理學系",
  "GLOBAL EQUITIES": "全球股票", "PORTFOLIO ALLOCATION": "投資組合配置", "AI × FINANCE": "AI × 金融", "MARKET RESEARCH": "市場研究",
  "Education & leadership": "教育與領導力", "Experience": "經歷", "Undergraduate entry": "大學入學",
  "Selected admission · Department of Finance": "特殊選才保送 · 財務管理學系",
  "National Sun Yat-sen University": "國立中山大學", "Bachelor’s student, Department of Finance": "財務管理學系學士生",
  "Admitted through Taiwan’s Special Selection pathway in recognition of demonstrated achievement and potential.": "透過臺灣特殊選才管道保送入學，高中優秀畢業生。",
  "Harvard Business Proposal Competition — Champion of China": "哈佛商業提案競賽 — 中國區冠軍",
  "University of Pennsylvania Social Entrepreneurship Competition — Champion of Taiwan": "賓夕法尼亞大學社會創業競賽 — 臺灣區冠軍",
  "Young Investors Society — Certified Young Investment Analyst": "Young Investors Society — 認證青年投資分析師",
  "Student Investment Challenge — Global 1st (300,000%) in 35 trade days": "學生投資挑戰賽 — 35 個交易日全球第一（300,000%）",
  "Founded Youth Innovation Council — 3 years of competitions, 2,000+ participants": "創立 Youth Innovation Council — 超三年賽事，累計 2,000+ 名參賽者",
  "Founded YIC Studio — helped 200+ students worldwide create strong international-competition results": "創立 YIC Studio — 協助全球 200+ 名學生在國際競賽中創造佳績",
  "Designed and independently developed a quantitative model — 15% average daily return, 6% maximum drawdown": "設計並獨立開發量化模型 — 平均日收益率 15%，最大回撤 6%",
  "A record of momentum": "持續前進的紀錄", "Wins": "獲獎", "Selected milestones across competitions, investing and leadership.": "精選競賽、投資與領導力里程碑。",
  "Champion of China": "中國區冠軍", "Champion of Taiwan": "臺灣區冠軍", "Certified Young Investment Analyst": "認證青年投資分析師", "Global 1st · 300,000% in 35 Trade Days": "全球第一 · 35 個交易日 300,000%",
  "Things I build and investigate": "我的實作與研究", "Projects": "專案", "Seven selected projects across investment, AI and product building.": "七項橫跨投資、AI 與產品開發的精選專案。",
  "All": "全部", "Stock Tools": "股票工具", "AI & Algorithms": "AI 與演算法", "Product": "產品", "Open project": "查看專案",
  "Consecutive SIC Investment Champion": "SIC 投資挑戰賽連續冠軍", "S14 & S15 Regional Champion": "S14 與 S15 區域冠軍",
  "Achieved consecutive championship results in the SIC Investment Challenge through disciplined portfolio construction, market timing and risk management.": "透過嚴謹的投資組合建構、市場時機判斷與風險管理，連續兩季奪得 SIC 投資挑戰賽冠軍。",
  "This achievement reflects the practical application of equity research, portfolio allocation and active risk management. Across two consecutive seasons, the strategy maintained strong performance while adapting to changing market conditions.": "此成果展現股票研究、投資組合配置與主動風險管理的實際應用。策略在連續兩季中因應市場變化，並維持強勁表現。",
  "Investment Research and Portfolio Analysis": "投資研究與投資組合分析",
  "Completed the Certified Young Investment Analyst designation, covering company research, valuation, portfolio construction and investment decision-making.": "完成青年投資分析師認證，內容涵蓋公司研究、估值、投資組合建構與投資決策。",
  "The certification strengthened my foundation in financial statement analysis, equity valuation and portfolio strategy. These principles are applied throughout my investment research and stock-analysis projects.": "此認證強化了我在財務報表分析、股票估值與投資組合策略方面的基礎，並應用於各項投資研究與股票分析專案。",
  "PennSEM Social Entrepreneurship Champion": "PennSEM 社會創業競賽冠軍", "Champion — Taiwan": "臺灣區冠軍",
  "Won the Taiwan championship in the PennSEM Social Entrepreneurship Competition with a commercially viable solution designed around measurable social impact.": "以兼具商業可行性與可衡量社會影響力的解決方案，奪得 PennSEM 社會創業競賽臺灣區冠軍。",
  "The project combined user needs, social impact and business sustainability into one structured proposal. It required product positioning, market analysis, revenue-model design and persuasive presentation.": "專案將使用者需求、社會影響力與商業永續整合為完整提案，涵蓋產品定位、市場分析、營收模式設計與提案表達。",
  "Youth Innovation Community": "青年創新社群", "Learning Through Real-World Projects": "透過真實專案學習",
  "A student innovation community built around entrepreneurship, investment, teamwork and project-based learning.": "以創業、投資、團隊合作及專案式學習為核心的學生創新社群。",
  "The initiative connects students through practical competitions, workshops and team projects. Participants move from idea generation to research, presentation and execution, turning classroom knowledge into real-world experience.": "透過實務競賽、工作坊與團隊專案連結學生，讓參與者從構想、研究、簡報一路走向執行，把課堂知識轉化為真實經驗。",
  "Autonomous Trading Decision Engine": "自主交易決策引擎", "Real-Time Market Analysis and Execution Logic": "即時市場分析與執行邏輯",
  "An AI-driven trading system that processes live market data, evaluates multiple execution strategies and selects actions based on liquidity, volatility and risk.": "由 AI 驅動的交易系統，可處理即時市場資料、評估多種執行策略，並依流動性、波動度與風險選擇行動。",
  "The system receives real-time price feeds, scans market opportunities and routes each trade through a structured decision engine. It evaluates midpoint execution, limit orders, position holding and dynamic hedging before selecting an execution path.\n\nThe full process is visualized so users can understand not only what decision was made, but why it was made.": "系統接收即時價格資訊、掃描市場機會，並透過結構化決策引擎處理每筆交易；在選擇執行路徑前，會評估中間價執行、限價單、持倉與動態避險。\n\n完整流程以視覺化呈現，讓使用者不只知道系統做了什麼決策，也能理解決策原因。",
  "Quantum Life Simulator": "量子人生模擬器", "AI-Powered Scenario and Decision Simulation": "AI 驅動的情境與決策模擬",
  "An interactive simulation system that transforms personal dilemmas into structured life scenarios and generates possible outcomes based on user priorities and decisions.": "互動式模擬系統，將個人困境轉化為結構化人生情境，並依使用者的優先順序與選擇產生可能結果。",
  "GIC & TSC Business Simulation Platform": "GIC 與 TSC 商業模擬平台", "Experiential Learning for Business and Finance": "商業與金融的體驗式學習",
  "A competition-based learning platform designed to help students develop financial literacy, business judgment and cross-disciplinary problem-solving skills.": "以競賽為核心的學習平台，協助學生培養金融素養、商業判斷與跨領域解題能力。",
  "The platform combines business simulation, investment decision-making and team competition into an applied learning experience. Participants analyze changing market conditions, allocate resources and make strategic decisions under pressure.\n\nThe project was designed not only as a competition, but as a structured educational product connecting theory with practical execution.": "平台將商業模擬、投資決策與團隊競賽整合為應用式學習體驗。參與者分析持續變化的市場條件、配置資源，並在壓力下制定策略。\n\n此專案不只是一場競賽，更是一項連結理論與實務執行的結構化教育產品。",
  "The simulator analyzes user input, identifies competing priorities and generates multiple possible life paths. Rather than offering a single answer, it allows users to compare outcomes involving career, income, relationships, health and personal ambition.\n\nThe system uses branching decision logic and weighted user preferences to simulate alternative futures. Each choice changes the probability and direction of later outcomes, creating a personalized decision experience.": "模擬器分析使用者輸入、辨識互相競爭的優先事項，並產生多種可能的人生路徑。它不提供單一答案，而是讓使用者比較職涯、收入、關係、健康與個人理想等不同結果。\n\n系統運用分支決策邏輯與加權偏好模擬未來；每個選擇都會改變後續結果的機率與方向，形成個人化決策體驗。",
  "Portfolio Strategy": "投資組合策略", "Equity Research": "股票研究", "Market Timing": "市場時機",
  "Valuation": "估值", "Portfolio Management": "投資組合管理", "Investment Research": "投資研究",
  "Product Strategy": "產品策略", "Social Innovation": "社會創新", "Business Model": "商業模式", "Market Validation": "市場驗證",
  "Community Building": "社群營造", "Entrepreneurship Education": "創業教育", "Project-Based Learning": "專案式學習", "Student Engagement": "學生參與",
  "Real-Time Data": "即時資料", "Strategy Selection": "策略選擇", "Execution Algorithms": "執行演算法", "Risk Monitoring": "風險監控", "Explainable Decisions": "可解釋決策",
  "Scenario Simulation": "情境模擬", "Decision Engine": "決策引擎", "Branching Logic": "分支邏輯", "Personalized AI": "個人化 AI",
  "Competition Platform": "競賽平台", "Financial Education": "金融教育", "Business Simulation": "商業模擬", "Experiential Learning": "體驗式學習", "Product Operations": "產品營運",
  "A moving toolkit": "持續移動的工具箱", "Skills": "技能", "Two skill tracks move in opposite directions.": "兩列技能軌道以相反方向持續移動。",
  "Fundamental Analysis": "基本面分析", "Financial Modeling": "財務建模", "Portfolio Allocation": "投資組合配置", "Market Data": "市場資料", "AI Research": "AI 研究", "Data Visualization": "資料視覺化", "Quantitative Trading": "量化交易", "Risk Management": "風險管理",
  "One perspective, two places": "一個視角，兩座城市", "Taiwan ↔ Shanghai": "臺灣 ↔ 上海", "Where I come from, where I learned, and how both shape the way I see markets.": "我的起點與成長之地，也共同塑造我觀察市場的方式。",
  "Shanghai": "上海", "Market scale · global perspective": "市場規模 · 全球視野", "Taiwan": "臺灣", "Foundation · current home base": "根基 · 現居地",
  "What keeps me curious": "讓我保持好奇的事", "Market Desk": "市場研究桌", "Live research mode": "即時研究模式", "Follow the signal, question the noise.": "追蹤訊號，質疑雜訊。", "My process combines fundamentals, market data, portfolio thinking and AI-enabled research tools.": "我的研究流程結合基本面、市場資料、投資組合思維與 AI 輔助研究工具。", "Start market pulse": "開啟市場脈動",
  "Global Equities": "全球股票", "AI × Finance": "AI × 金融",
  "Leave a word for the next visitor": "留一句話給下一位訪客", "Pass it on": "傳遞下去", "Your word is now part of the story.": "你的話已成為故事的一部分。",
  "Say hello": "期待與你相遇", "Let’s talk about": "一起聊聊", "something special.": "那些值得發生的事。", "Market outlooks, investment research, AI-enabled finance, competitions—or simply a hello. My inbox is open.": "無論是市場展望、投資研究、AI 金融、競賽，或只是一聲問候，我的信箱始終為真誠的交流敞開。", "Get in touch": "寄出訊息", "Message ready—thank you for stopping by.": "訊息已順利寄出，期待與你相遇。", "Sending…": "傳送中…", "Unable to send. Please try again.": "目前未能寄出，請稍後再試。",
  "Made between Taiwan & Shanghai.": "創作於臺灣與上海之間。", "Back to top ↑": "返回頂部 ↑",
  "Home": "首頁", "Contact": "聯絡", "Email": "電子郵件", "My projects": "我的專案", "My achievements": "我的成就",
  "Your name": "你的姓名", "Where did you find me?": "你從哪裡認識我？", "Leave a little note": "留下一段訊息", "HELLO!": "你好！",
  "Close story": "關閉內容", "Close market pulse video": "關閉市場影片", "Market pulse · video note": "市場脈動 · 影片筆記", "Inside my trading workflow": "走進我的交易研究流程", "Project image coming next": "專案圖片即將補上"
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function localizeTree(root, language) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = zhTW[trimmed];
    const next = language === "zh-TW" && translated ? source.replace(trimmed, translated) : source;
    if (node.nodeValue !== next) node.nodeValue = next;
  });
  root.querySelectorAll?.("[placeholder],[aria-label],[alt]").forEach((element) => {
    if (element.matches(".language-toggle")) return;
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const stored = originalAttributes.get(element);
    ["placeholder", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!(attribute in stored)) stored[attribute] = element.getAttribute(attribute);
      const source = stored[attribute];
      const next = language === "zh-TW" && zhTW[source] ? zhTW[source] : source;
      if (element.getAttribute(attribute) !== next) element.setAttribute(attribute, next);
    });
  });
}

function Modal({ item, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const key = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", key);
      previous?.focus?.();
    };
  }, [item, onClose]);
  if (!item) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()} role="presentation">
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close story"><X size={22} /></button>
        {item.image ? <img src={item.image} alt={`Visual for ${item.title || item.caption}`} /> : <div className="modal-placeholder"><PresentationChart weight="duotone" /><span>Project image coming next</span></div>}
        <div className="modal-copy">
          <span className="eyebrow">{item.category || item.tag || item.country || "A small story"}</span>
          <h2 id="modal-title">{item.title || item.caption}</h2>
          <p className="modal-subtitle">{item.subtitle || item.date || "From my camera roll"}</p>
          <p>{item.longText || item.text || "This space is ready for the story behind your photograph—where you were, what you noticed, and why you still remember it."}</p>
          {item.tags && <div className="project-tags modal-tags">{item.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>}
        </div>
      </section>
    </div>
  );
}

function VideoModal({ open, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const key = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", key);
      previous?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop video-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()} role="presentation">
      <section className="video-modal" role="dialog" aria-modal="true" aria-labelledby="market-video-title">
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close market pulse video"><X size={22} /></button>
        <div className="video-heading"><span className="eyebrow">Market pulse · video note</span><h2 id="market-video-title">Inside my trading workflow</h2></div>
        <video src="/assets/market-pulse.mp4" controls autoPlay playsInline preload="metadata">Your browser does not support the video element.</video>
      </section>
    </div>
  );
}

function Typewriter() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const keys = "1234567890-QWERTYUIOPASDFGHJKL;'ZXCVBNM,./".split("");
  const press = (key) => setMessage((value) => (value + key).slice(0, 120));
  return (
    <div className="typewriter-wrap">
      <h2>Leave a word for the next visitor</h2>
      <div className="typewriter">
        <textarea value={message} maxLength={120} onChange={(e) => setMessage(e.target.value)} placeholder="HELLO!" aria-label="A note for the next visitor" />
        <span className="counter">{message.length}/120</span>
        <div className="keybed" aria-hidden="true">
          {keys.map((key, i) => <button tabIndex="-1" key={`${key}-${i}`} onClick={() => press(key)}>{key}</button>)}
          <button className="space" tabIndex="-1" onClick={() => press(" ")}>SPACE</button>
        </div>
        <button className="pass" onClick={() => { if (message.trim()) { setSent(true); setTimeout(() => setSent(false), 2400); setMessage(""); } }}>Pass it on <ArrowRight /></button>
      </div>
      {sent && <div className="toast">Your word is now part of the story.</div>}
    </div>
  );
}

export function App() {
  const [language, setLanguage] = useState(() => typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en");
  const [modal, setModal] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [formStatus, setFormStatus] = useState("idle");
  const [idFlipped, setIdFlipped] = useState(false);
  const [projectCategory, setProjectCategory] = useState("All");
  const [activeHeroTag, setActiveHeroTag] = useState("AI");
  const projectCategories = ["All", "Stock Tools", "AI & Algorithms", "Product"];
  const portraitProjectIds = new Set([1, 5, 6, 7]);
  const visibleProjects = (projectCategory === "All" ? data.projects : data.projects.filter((project) => project.category === projectCategory))
    .slice().sort((a, b) => Number(portraitProjectIds.has(b.id)) - Number(portraitProjectIds.has(a.id)));
  useEffect(() => {
    document.documentElement.lang = language;
    localizeTree(document.body, language);
    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) localizeTree(node, language);
        if (node.nodeType === Node.TEXT_NODE) localizeTree(node.parentElement, language);
      });
    }));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language, modal, videoOpen, projectCategory]);
  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll(".page-section")];
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("section-in-view", entry.isIntersecting));
    }, { threshold: 0.08, rootMargin: "0px 0px -8%" });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${data.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Unable to send");
      form.reset();
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 4200);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4200);
    }
  };

  return (
    <main>
      <header className="brand">{data.name}<span>.</span></header>
      <button className="language-toggle" onClick={() => setLanguage((value) => value === "zh-TW" ? "en" : "zh-TW")} aria-label={language === "zh-TW" ? "Switch to English" : "切換至繁體中文"}>
        <span className={language === "zh-TW" ? "active" : ""}>繁中</span><i>/</i><span className={language === "en" ? "active" : ""}>EN</span>
      </button>
      <nav className="dock" aria-label="Section navigation">
        {nav.map(([id, Icon, label]) => <a className={active === id ? "active" : ""} href={`#${id}`} key={id} aria-label={label}><Icon weight={active === id ? "fill" : "regular"} /><span>{label}</span></a>)}
      </nav>

      <section id="home" className="hero page-section">
        <div className="profile-line" aria-label="Profile of Kaixuan Huang">PROFILE · KAIXUAN HUANG · FINANCIAL ANALYST · AI ENGINEER</div>
        <div className="hero-tag-cloud" aria-label="Profile interests">
          {data.heroTags.map((tag,index) => <button key={tag} className={activeHeroTag === tag ? "active" : ""} style={{"--tag-delay":`${index * 160}ms`}} aria-pressed={activeHeroTag === tag} onClick={() => setActiveHeroTag(tag)}>#{tag}</button>)}
        </div>
        <img className="opening-sketch" src={data.sketchImage} alt="Pencil portrait of Kaixuan Huang" />
        <div className="hero-copy reveal">
          <span className="eyebrow">A personal corner of the internet</span>
          <h1>Hello I’m<br /><span>{data.name}</span><span className="typed">_</span></h1>
          <h2>{data.role}</h2>
          <div className="intro-copy">{data.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="socials">
            <a href={`mailto:${data.email}`} aria-label="Email"><Envelope /></a>
            <a className="social-contact" href="https://www.instagram.com/hkx_theoooo" target="_blank" rel="noreferrer" aria-label="Instagram hkx_theoooo"><span>@hkx_theoooo</span><InstagramLogo weight="regular" aria-hidden="true" /></a>
            <span className="social-contact" aria-label="WeChat Theoooo1130"><span>Theoooo1130</span><WechatLogo weight="regular" aria-hidden="true" /></span>
            <a href="#projects" aria-label="My projects"><PresentationChart /></a><a href="#wins" aria-label="My achievements"><Trophy /></a>
          </div>
        </div>
        <div className="hanging-photo badge-container" aria-label="Kaixuan Huang photo ID">
          <div className="strap" /><div className="hook" />
          <button className={`id-flip ${idFlipped ? "flipped" : ""}`} onClick={() => setIdFlipped((value) => !value)} aria-label={idFlipped ? "Show the front of the ID card" : "Show the back of the ID card"}>
            <span className="id-card-face id-front"><img src={data.idFront} alt="Kaixuan in a snow-covered Shanghai garden" /><small>KAIXUAN HUANG · FRONT</small></span>
            <span className="id-card-face id-back id-info"><small>IDENTITY · BACK</small><b>KAIXUAN<br />HUANG</b><span>Financial Analyst · AI Engineer</span><span>Finance · AI · Markets</span><span>Taiwan ↔ Shanghai</span><i>Tap to return</i></span>
          </button>
          <span className="flip-hint">Click the ID to flip it ↻</span>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to wander</span><ArrowDown /></a>
      </section>

      <section id="about" className="about page-section">
        <div className="section-heading"><span className="eyebrow">A little context</span><h2>Between places,<br />always curious.</h2></div>
        <div className="about-grid">
          <p>My core expertise lies in combining financial-data analysis with artificial intelligence. Whether developing quantitative-trading strategies, leading large-scale commercial projects or building intelligent AI systems, I aim to use technology to create concrete and executable business value.</p>
          <div className="facts"><span><MapPin /> Based in Taiwan</span><span><GraduationCap /> NSYSU · Department of Finance</span><span><Briefcase /> Financial Analyst · AI Engineer</span></div>
        </div>
        <div className="ticker-strip reveal-block" aria-label="Market interests">
          <span>NASDAQ</span><b>GLOBAL EQUITIES</b><TrendUp /><span>PORTFOLIO ALLOCATION</span><b>AI × FINANCE</b><TrendUp /><span>MARKET RESEARCH</span>
        </div>
      </section>

      <section id="experience" className="experience page-section">
        <div className="section-heading centered"><span className="eyebrow">Education & leadership</span><h2>Experience</h2></div>
        <article className="experience-entry bounce-group">
          <div className="experience-date"><span>SEP 01</span><b>2026</b><i>Undergraduate entry</i></div>
          <div className="experience-content">
            <span className="eyebrow">Selected admission · Department of Finance</span>
            <h3>National Sun Yat-sen University <small>(NSYSU)</small></h3>
            <h4>Bachelor’s student, Department of Finance</h4>
            <p className="admission-note">Admitted through Taiwan’s Special Selection pathway in recognition of demonstrated achievement and potential.</p>
            <ul>
              <li>Harvard Business Proposal Competition — Champion of China</li>
              <li>University of Pennsylvania Social Entrepreneurship Competition — Champion of Taiwan</li>
              <li>Young Investors Society — Certified Young Investment Analyst</li>
              <li>Student Investment Challenge — Global 1st (300,000%) in 35 trade days</li>
              <li>Founded Youth Innovation Council — 3 years of competitions, 2,000+ participants</li>
              <li>Founded YIC Studio — helped 200+ students worldwide create strong international-competition results</li>
              <li>Designed and independently developed a quantitative model — 15% average daily return, 6% maximum drawdown</li>
            </ul>
          </div>
        </article>
      </section>

      <section id="wins" className="wins-section page-section">
        <div className="section-heading centered"><span className="eyebrow">A record of momentum</span><h2>Wins</h2><p>Selected milestones across competitions, investing and leadership.</p></div>
        <div className="wins-rail bounce-group">
          {data.wins.map((win,index) => <article className="win-card" key={win.title} style={{"--delay":`${index * 100}ms`}}><div className="win-medal"><Medal weight="duotone" /><span>{win.medal}</span></div><h3>{win.title}</h3><b>{win.result}</b><small>KAIXUAN HUANG · 2026</small></article>)}
        </div>
      </section>

      <section id="projects" className="projects-section page-section">
        <div className="section-heading centered"><span className="eyebrow">Things I build and investigate</span><h2>Projects</h2><p>Seven selected projects across investment, AI and product building.</p></div>
        <div className="project-filters filter-container" aria-label="Project categories">{projectCategories.map((category) => <button className={projectCategory === category ? "active" : ""} onClick={() => setProjectCategory(category)} key={category}>{category}</button>)}</div>
        <div className="project-stage">
          <div className="project-grid project-rail" aria-label={`${projectCategory} projects`}>
            {visibleProjects.map((project,index) => <button className="project-card" key={project.id} style={{"--index":index}} onClick={() => setModal(project)}>
              {project.image ? <img src={project.image} alt={`Visual for ${project.title}`} /> : <div className="project-image-slot"><PresentationChart weight="duotone" /><span>IMAGE SLOT</span></div>}
              <div><span>{project.category}</span><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.shortText}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div><b>Open project <ArrowRight /></b></div>
            </button>)}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section page-section">
        <div className="section-heading centered"><span className="eyebrow">A moving toolkit</span><h2>Skills</h2><p>Two skill tracks move in opposite directions.</p></div>
        <div className="skills-window marquee-container">
          <div className="skills-track marquee-track">{[...data.skills,...data.skills].map(([Icon,label],index) => <article className="skill-pill skill-card" key={`a-${label}-${index}`}><Icon weight="duotone" /><span>{label}</span></article>)}</div>
          <div className="skills-track marquee-track reverse">{[...data.skills,...data.skills].reverse().map(([Icon,label],index) => <article className="skill-pill skill-card" key={`b-${label}-${index}`}><Icon weight="duotone" /><span>{label}</span></article>)}</div>
        </div>
      </section>

      <section id="travel" className="travel page-section">
        <div className="section-heading centered"><span className="eyebrow">One perspective, two places</span><h2>Taiwan ↔ Shanghai</h2><p>Where I come from, where I learned, and how both shape the way I see markets.</p></div>
        <div className="city-map reveal-block">
          <img src={data.citySketch} alt="Pencil illustration connecting Shanghai and Taiwan with finance chart details" />
          <div className="city-note shanghai-note"><b>Shanghai</b><span>Market scale · global perspective</span></div>
          <div className="city-note taiwan-note"><b>Taiwan</b><span>Foundation · current home base</span></div>
        </div>
      </section>

      <section id="playlist" className="playlist page-section">
        <div className="section-heading"><span className="eyebrow">What keeps me curious</span><h2>Market Desk</h2></div>
        <div className="market-layout">
          <div className={`record-card reveal-block ${playing ? "playing" : ""}`}>
            <div className="vinyl market-disc"><ChartLineUp weight="duotone" /></div><div><span className="eyebrow">Live research mode</span><h3>Follow the signal, question the noise.</h3><p>My process combines fundamentals, market data, portfolio thinking and AI-enabled research tools.</p><button onClick={() => { setPlaying(true); setVideoOpen(true); }}><Play weight="fill" /> Start market pulse</button></div>
          </div>
          <div className="focus-grid">
            {data.marketFocus.map(({icon: Icon,label,text},index) => <article className="focus-card pop-card" style={{"--delay": `${index * 120}ms`}} key={label}><Icon weight="duotone" /><span>0{index+1}</span><h3>{label}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="message page-section"><Typewriter /></section>

      <section id="contact" className="contact page-section">
        <form onSubmit={submit}><input type="hidden" name="_subject" value="New portfolio message" /><input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="honey-field" /><input required name="name" placeholder="Your name" /><input required name="email" type="email" placeholder="Email" /><input name="source" placeholder="Where did you find me?" /><textarea required name="message" placeholder="Leave a little note" /><button disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending…" : "Get in touch"} <PaperPlaneTilt /></button></form>
        <div><span className="eyebrow">Say hello</span><h2>Let’s talk about<br />something special.</h2><p>Market outlooks, investment research, AI-enabled finance, competitions—or simply a hello. My inbox is open.</p><a className="mail" href={`mailto:${data.email}`}>{data.email}</a></div>
        {formStatus === "sent" && <div className="toast">Message ready—thank you for stopping by.</div>}
        {formStatus === "error" && <div className="toast error-toast">Unable to send. Please try again.</div>}
      </section>

      <footer><span>Made between Taiwan & Shanghai.</span><a href="#home">Back to top ↑</a></footer>
      <Modal item={modal} onClose={() => setModal(null)} />
      <VideoModal open={videoOpen} onClose={() => { setVideoOpen(false); setPlaying(false); }} />
    </main>
  );
}
