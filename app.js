// ─── i18n (static, outside initApp) ──────────────────────────
const I18N = {
  zh: {
    loading: '加载中…', loadingShort: '加载中', loadingMarket: '正在加载市场数据…', analyzing: '分析中',
    loadingOptions: '加载期权数据中…',
    disclaimer: '⚠️ 本工具仅供参考，不构成投资建议。期权交易存在较大风险，请在充分了解风险后谨慎操作。',
    whatNow: '📍 我现在应该做什么？', basedOn: '根据当前市场指标综合判断',
    haveUsdt: '💵 我有 USDT', haveBtc: '₿ 我持有 BTC',
    metricDvol: 'DVOL（波动率指数）', metricIvp: 'IVP（历史百分位）',
    metricFng: '恐惧贪婪指数', metricBtc1h: 'BTC 1h 涨跌', vs1h: 'vs 1小时前',
    wheelTitle: 'Wheel 轮动策略 — 完整循环',
    wHaveUsdt: '💵 有 USDT', wIdle: '闲置资金', wSellPut: '卖出 Put', wCollect: '收取权利金',
    wAssigned: '被行权', wHoldBtc: '₿ 持有 BTC', wBuyLow: '低价买入',
    wSellCall: '卖出 Call', wSoldHigh: '高价卖出 ✅',
    wheelFootnote: '每一步都收取权利金，无论是否被行权都有额外收益 💰',
    putSignalTitle: 'Sell Put 入场信号', callSignalTitle: 'Covered Call 入场信号',
    sig1: '① BTC 1h 急跌程度', sig2: '② DVOL 1h 恐慌上升', sig3: '③ 波动率历史高位（IVP）',
    ccSig1: '① DVOL 绝对值（越高越好）', ccSig2: '② 恐惧贪婪偏贪婪（顶部区域）', ccSig3: '③ BTC 近期上涨（靠近阻力位）',
    scoreLabel: '/ 100 综合评分',
    putAdvice: '满足 3 个条件时急跌是入场信号，波动率高时权利金更丰厚。',
    callAdvice: '持有 BTC 时卖出 Call，在高点附近锁定利润，同时赚取权利金。',
    tabPut: '📋 Sell Put 合约选择', tabCall: '📋 Covered Call 合约选择', tabCalc: '🧮 盈亏计算器',
    fMinDays: '最短到期（天）', fMaxDays: '最长到期（天）', fMinYield: '最低年化收益率', fRisk: '风险偏好',
    rAll: '全部', rConservative: '保守（Delta <0.25）', rModerate: '适中（Delta <0.40）',
    thStrike: '行权价 ↕', thExpiry: '到期日 ↕', thDays: '天数', thIV: '隐含波动率',
    thYield: '年化收益 ↕', thPremium: '权利金（BTC）', thBreakeven: '盈亏平衡', thAssignPrice: '被行权价格', thRating: '评级',
    putTip: '💡 <strong style="color:var(--text)">新手建议</strong>：选 Delta 在 -0.20 左右、到期 14-21 天的合约，被行权概率约 20%，风险可控。',
    callTip: '💡 <strong style="color:var(--text)">新手建议</strong>：选 Delta 在 0.20 左右、到期 14-21 天的合约，设在当前价格 10-20% 以上的行权价。',
    calcInput: '输入参数', calcResult: '计算结果', calcType: '策略类型',
    calcSellPut: 'Sell Put（卖出看跌期权）', calcCovCall: 'Covered Call（备兑看涨期权）',
    calcCapital: '我的资金（USDT）', calcStrike: '行权价（USD）', calcDays: '合约到期（天）',
    calcPremium: '权利金（每张，USDT）', calcBtcPrice: 'BTC 当前价格（自动填入）',
    resMaxProfit: '最大收益（权利金）', resMaxLoss: '最大亏损', resBreakeven: '盈亏平衡点',
    resMargin: '保证金占用（约）', resAnnual: '预期年化收益率', resProb: '被行权概率（约）',
    pnlTitle: '盈亏图（到期时）',
    dvolTitle: 'DVOL 波动率指数（90天）', fngTitle: '恐惧贪婪指数（90天）',
    rainbowTitle: 'BTC 彩虹图（对数回归）', rainbowSub: '基于对数回归模型，判断当前价格处于历史估值的哪个区间',
    currentBand: '当前所在区间',
    rainbowFormula: '📐 模型参数：log₁₀(price) = 5.845 × log₁₀(距创世日天数) + b，参考 blockchaincenter.net 方法论。白线 = BTC 月收盘价。',
    eduTitle: '新手教程 — 读懂再操作',
    footerSources: '数据来源：', footerBtcPrice: '（BTC价格）', footerDvol: '（DVOL + 期权链）',
    footerFng: '（恐惧贪婪指数）', footerDisclaimer: '以上数据均来自免费公开 API，实时更新。本工具不构成投资建议。',
    updatedAt: '更新于 ',
    ivpHigh: '⬆ 历史高位', ivpLow: '⬇ 历史低位', ivpMid: '→ 中等水平',
    scoreHigh: '⭐ 良好入场时机', scoreMid: '⚡ 部分信号满足', scoreLow: '⏳ 等待更好时机',
    recSellPut: '⭐ 建议 Sell Put', recSellCall: '⭐ 建议 Sell Call',
    recLight: '⏳ 可考虑轻仓', recWatch: '🔍 当前观望',
    reasonPut1: (ivp, dvol) => `IVP=${ivp}%，DVOL=${dvol}，波动率处于较高水平，权利金丰厚`,
    reasonPut2: (s) => `评分 ${s}/100，部分条件满足，建议等待波动率进一步上升或价格急跌`,
    reasonPut3: (s) => `评分 ${s}/100，波动率偏低或价格平稳，不是最佳卖 Put 时机`,
    reasonCall1: (fng, dvol) => `恐贪指数 ${fng}，DVOL=${dvol}，市场偏贪婪，适合卖出 Call 锁定利润`,
    reasonCall2: (s) => `评分 ${s}/100，部分条件满足，建议等更明确的贪婪信号`,
    reasonCall3: (s) => `评分 ${s}/100，条件尚未充分满足`,
    sigDropVal: (v) => `${v}% / 需≥2.5%`, sigDvolVal: (v) => `${v}% / 需≥5%`,
    sigIvpVal: (v) => `IVP ${v}% / 建议≥70`,
    sigCcDvolVal: (v) => `DVOL ${v} / 建议≥50`, sigCcFngVal: (v) => `恐贪 ${v} / 建议≥60`,
    sigCcRiseVal: (v) => `${v}% / 建议≥1%`,
    noContracts: '暂无符合条件的合约', daysUnit: '天',
    badgeCons: '保守推荐', badgeNovice: '新手推荐', badgeMod: '适中', badgeAggr: '激进',
    calcExtreme: '（极端）', calcHoldingLoss: '持仓市值损失',
    calcMarginPct: (pct) => `（约占资金 ${pct}%）`,
    bandNames: ['🔵 极度低估（火灾价）','🔵 买入机会','🔵 积累期','🟢 还算便宜','🟡 HODL 持有','🟠 这是泡沫吗？','🟠 FOMO 来了','🔴 认真卖出','🔴 极度泡沫'],
    chartBtcClose: 'BTC 月收盘', chartCurrentPrice: '当前价格',
    tipHow: '怎么看？',
    tipDecision: '这是综合所有指标后给出的<strong>一句话建议</strong>。黄色边框 = 建议卖 Put，紫色 = 建议卖 Call，灰色 = 观望。<br><br><strong>怎么用？</strong>先用上方按钮选择你当前持有什么（USDT 或 BTC），系统会根据你的持仓给出对应的操作建议。下方 4 个指标卡是支撑决策的核心数据。',
    tipWheel: '这是 Wheel 策略的完整循环流程图。从左到右跟着箭头走：<strong>有 USDT → 卖 Put → 被行权持有 BTC → 卖 Call → 被行权回到 USDT</strong>。每一步都收权利金，循环往复。<br><br><strong>怎么用？</strong>看你当前处于流程的哪个位置，然后参考下方信号面板决定下一步。',
    tipPutSignal: '3 个进度条代表 3 个入场条件：<strong>BTC 急跌、DVOL 飙升、IVP 高位</strong>。进度越满（越绿）说明条件越成熟。下方评分 0-100 是综合得分。<br><br><strong>怎么用？</strong>评分 ≥65 时是较好的卖 Put 时机（波动率高 = 权利金丰厚）。低于 35 建议观望。',
    tipCallSignal: '3 个条件：<strong>DVOL 高、市场偏贪婪、BTC 近期上涨</strong>。条件满足时适合卖出 Call 锁定利润。<br><br><strong>怎么用？</strong>持有 BTC 时使用。评分 ≥65 建议卖 Call，在高位收取权利金。市场恐慌时不适合卖 Call。',
    tipTable: 'Sell Put 表：列出可卖的看跌期权，按年化收益排序。关注 Delta（越小越安全）和年化收益率。<br>Covered Call 表：列出可卖的看涨期权，逻辑类似。<br>盈亏计算器：输入参数后可视化你的盈亏曲线。<br><br><strong>怎么用？</strong>用上方筛选条件找合适的合约。新手选 Delta ≤0.20、到期 14-21 天的。绿色「保守推荐」标签是最安全的选择。',
    tipDvol: 'DVOL 是 Deribit 的 BTC 波动率指数，类似股市的 VIX。<strong>数值越高 = 市场预期波动越大 = 期权越贵</strong>。<br>• 50 以下：偏低，卖方收益一般<br>• 50-80：适中<br>• 80 以上：极高，卖方黄金期<br><br><strong>怎么用？</strong>DVOL 高时卖期权权利金更丰厚。图表帮你判断当前处于 90 天内的什么位置。',
    tipFng: '0-100 的情绪指标。<strong>0 = 极度恐慌，100 = 极度贪婪</strong>。<br>• 红色柱（≤25）：市场恐慌，适合卖 Put<br>• 橙色柱（25-75）：中性<br>• 绿色柱（≥75）：市场贪婪，适合卖 Call<br><br><strong>怎么用？</strong>恐慌时卖 Put（别人恐惧你贪婪），贪婪时卖 Call（在高位锁利润）。',
    tipRainbow: '彩虹图用对数回归模型将 BTC 价格分为 9 个色带区间：<br>• <strong>蓝色区</strong>：极度低估，历史最佳买点<br>• <strong>绿色区</strong>：合理估值，HODL 区<br>• <strong>红色区</strong>：极度泡沫，考虑减仓<br><br><strong>怎么用？</strong>右上角显示当前 BTC 所在区间。<strong>蓝/绿区卖 Put 更安全</strong>（跌到行权价也是低估买入），<strong>橙/红区卖 Call 更合适</strong>（高估区锁定利润）。',
    tipEdu: '4 个可展开的教程，点击标题即可展开/收起。建议<strong>从上到下按顺序阅读</strong>。<br><br><strong>怎么用？</strong>如果你是期权新手，请先完整阅读这些教程再做任何操作。里面有具体的数字举例帮助理解。',
  },
  en: {
    loading: 'Loading…', loadingShort: 'Loading', loadingMarket: 'Loading market data…', analyzing: 'Analyzing',
    loadingOptions: 'Loading options data…',
    disclaimer: '⚠️ This tool is for reference only and does not constitute investment advice. Options trading involves significant risk.',
    whatNow: '📍 What should I do now?', basedOn: 'Based on current market indicators',
    haveUsdt: '💵 I have USDT', haveBtc: '₿ I hold BTC',
    metricDvol: 'DVOL (Volatility Index)', metricIvp: 'IVP (Historical Percentile)',
    metricFng: 'Fear & Greed Index', metricBtc1h: 'BTC 1h Change', vs1h: 'vs 1 hour ago',
    wheelTitle: 'Wheel Strategy — Full Cycle',
    wHaveUsdt: '💵 Have USDT', wIdle: 'Idle funds', wSellPut: 'Sell Put', wCollect: 'Collect premium',
    wAssigned: 'Assigned', wHoldBtc: '₿ Hold BTC', wBuyLow: 'Buy low',
    wSellCall: 'Sell Call', wSoldHigh: 'Sold high ✅',
    wheelFootnote: 'Collect premium at every step, whether assigned or not 💰',
    putSignalTitle: 'Sell Put Entry Signals', callSignalTitle: 'Covered Call Entry Signals',
    sig1: '① BTC 1h Drop Severity', sig2: '② DVOL 1h Panic Spike', sig3: '③ Volatility Percentile (IVP)',
    ccSig1: '① DVOL Level (higher = better)', ccSig2: '② Fear & Greed leaning greedy', ccSig3: '③ BTC recent rally (near resistance)',
    scoreLabel: '/ 100 Score',
    putAdvice: 'When all 3 conditions are met, a dip is an entry signal. High volatility = rich premiums.',
    callAdvice: 'Sell Calls while holding BTC to lock in profits near highs and earn premium.',
    tabPut: '📋 Sell Put Contracts', tabCall: '📋 Covered Call Contracts', tabCalc: '🧮 P&L Calculator',
    fMinDays: 'Min expiry (days)', fMaxDays: 'Max expiry (days)', fMinYield: 'Min annual yield', fRisk: 'Risk preference',
    rAll: 'All', rConservative: 'Conservative (Delta <0.25)', rModerate: 'Moderate (Delta <0.40)',
    thStrike: 'Strike ↕', thExpiry: 'Expiry ↕', thDays: 'Days', thIV: 'Impl. Vol.',
    thYield: 'Ann. Yield ↕', thPremium: 'Premium (BTC)', thBreakeven: 'Breakeven', thAssignPrice: 'Assign Price', thRating: 'Rating',
    putTip: '💡 <strong style="color:var(--text)">Beginner tip</strong>: Choose Delta around -0.20, 14-21 days to expiry, ~20% assignment probability, manageable risk.',
    callTip: '💡 <strong style="color:var(--text)">Beginner tip</strong>: Choose Delta around 0.20, 14-21 days to expiry, strike 10-20% above current price.',
    calcInput: 'Input Parameters', calcResult: 'Results', calcType: 'Strategy type',
    calcSellPut: 'Sell Put', calcCovCall: 'Covered Call',
    calcCapital: 'My capital (USDT)', calcStrike: 'Strike price (USD)', calcDays: 'Days to expiry',
    calcPremium: 'Premium per contract (USDT)', calcBtcPrice: 'BTC current price (auto-filled)',
    resMaxProfit: 'Max profit (premium)', resMaxLoss: 'Max loss', resBreakeven: 'Breakeven',
    resMargin: 'Margin required (approx.)', resAnnual: 'Expected annual yield', resProb: 'Assignment probability (approx.)',
    pnlTitle: 'P&L at Expiry',
    dvolTitle: 'DVOL Volatility Index (90d)', fngTitle: 'Fear & Greed Index (90d)',
    rainbowTitle: 'BTC Rainbow Chart (Log Regression)', rainbowSub: 'Log regression model showing which historical valuation band BTC currently sits in',
    currentBand: 'Current band',
    rainbowFormula: '📐 Model: log₁₀(price) = 5.845 × log₁₀(days since genesis) + b, ref: blockchaincenter.net. White line = BTC monthly close.',
    eduTitle: 'Beginner Guide — Read Before Trading',
    footerSources: 'Data sources: ', footerBtcPrice: ' (BTC price)', footerDvol: ' (DVOL + options chain)',
    footerFng: ' (Fear & Greed Index)', footerDisclaimer: 'All data from free public APIs, updated in real-time. Not investment advice.',
    updatedAt: 'Updated at ',
    ivpHigh: '⬆ Historical high', ivpLow: '⬇ Historical low', ivpMid: '→ Average',
    scoreHigh: '⭐ Good entry', scoreMid: '⚡ Partial signals', scoreLow: '⏳ Wait for better timing',
    recSellPut: '⭐ Sell Put', recSellCall: '⭐ Sell Call',
    recLight: '⏳ Consider light position', recWatch: '🔍 Hold off',
    reasonPut1: (ivp, dvol) => `IVP=${ivp}%, DVOL=${dvol}, volatility is elevated — premiums are rich`,
    reasonPut2: (s) => `Score ${s}/100, partial conditions met — wait for higher vol or a price dip`,
    reasonPut3: (s) => `Score ${s}/100, low vol or stable price — not the best time to sell puts`,
    reasonCall1: (fng, dvol) => `F&G=${fng}, DVOL=${dvol}, market is greedy — good time to sell calls`,
    reasonCall2: (s) => `Score ${s}/100, partial conditions met — wait for clearer greed signals`,
    reasonCall3: (s) => `Score ${s}/100, conditions not fully met yet`,
    sigDropVal: (v) => `${v}% / need ≥2.5%`, sigDvolVal: (v) => `${v}% / need ≥5%`,
    sigIvpVal: (v) => `IVP ${v}% / want ≥70`,
    sigCcDvolVal: (v) => `DVOL ${v} / want ≥50`, sigCcFngVal: (v) => `F&G ${v} / want ≥60`,
    sigCcRiseVal: (v) => `${v}% / want ≥1%`,
    noContracts: 'No contracts match filters', daysUnit: 'd',
    badgeCons: 'Conservative', badgeNovice: 'Beginner pick', badgeMod: 'Moderate', badgeAggr: 'Aggressive',
    calcExtreme: ' (extreme)', calcHoldingLoss: 'Holding value loss',
    calcMarginPct: (pct) => ` (~${pct}% of capital)`,
    bandNames: ['🔵 Extremely Undervalued','🔵 Buy Opportunity','🔵 Accumulation','🟢 Still Cheap','🟡 HODL','🟠 Is This a Bubble?','🟠 FOMO Intensifies','🔴 Sell Seriously','🔴 Extreme Bubble'],
    chartBtcClose: 'BTC Monthly Close', chartCurrentPrice: 'Current Price',
    tipHow: 'How to read?',
    tipDecision: 'This gives you a <strong>one-line recommendation</strong> based on all indicators. Yellow border = Sell Put, purple = Sell Call, gray = Wait.<br><br><strong>How to use?</strong> First select what you hold (USDT or BTC) using the buttons above. The 4 metric cards below support the decision.',
    tipWheel: 'This is the full Wheel strategy cycle. Follow the arrows left to right: <strong>Have USDT → Sell Put → Assigned hold BTC → Sell Call → Assigned back to USDT</strong>. You collect premium at every step.<br><br><strong>How to use?</strong> See where you are in the cycle, then check the signal panels below.',
    tipPutSignal: '3 progress bars = 3 entry conditions: <strong>BTC dip, DVOL spike, IVP high</strong>. Fuller (greener) bars mean more mature conditions. Score 0-100 below is the composite.<br><br><strong>How to use?</strong> Score ≥65 is a good time to sell puts (high vol = rich premiums). Below 35, wait.',
    tipCallSignal: '3 conditions: <strong>High DVOL, market greedy, BTC rising</strong>. When met, it\'s good to sell calls and lock profits.<br><br><strong>How to use?</strong> Use when holding BTC. Score ≥65 means sell calls. Not suitable during market panic.',
    tipTable: '<strong>Sell Put table</strong>: Lists available put options sorted by annual yield. Focus on Delta (lower = safer) and yield.<br><strong>Covered Call table</strong>: Similar for call options.<br><strong>P&L Calculator</strong>: Visualize your profit/loss curve.<br><br><strong>How to use?</strong> Filter for suitable contracts. Beginners: Delta ≤0.20, 14-21 day expiry. Green "Conservative" badge is the safest.',
    tipDvol: 'DVOL is Deribit\'s BTC volatility index, similar to VIX. <strong>Higher = more expected volatility = more expensive options</strong>.<br>• Below 50: Low, average seller returns<br>• 50-80: Moderate<br>• Above 80: Very high, golden period for sellers<br><br><strong>How to use?</strong> Sell options when DVOL is high for richer premiums.',
    tipFng: '0-100 sentiment indicator. <strong>0 = Extreme Fear, 100 = Extreme Greed</strong>.<br>• Red bars (≤25): Market fear — sell puts<br>• Orange (25-75): Neutral<br>• Green (≥75): Market greed — sell calls<br><br><strong>How to use?</strong> Sell puts during fear, sell calls during greed.',
    tipRainbow: 'Rainbow chart divides BTC price into 9 bands using log regression:<br>• <strong>Blue</strong>: Extremely undervalued, historic buy zone<br>• <strong>Green</strong>: Fair value, HODL zone<br>• <strong>Red</strong>: Extreme bubble, consider reducing<br><br><strong>How to use?</strong> Top-right shows current band. <strong>Blue/green = safer to sell puts</strong>, <strong>orange/red = better to sell calls</strong>.',
    tipEdu: '4 expandable tutorials. Click to open/close. Read <strong>top to bottom</strong>.<br><br><strong>How to use?</strong> If you\'re new to options, read all tutorials before trading. They include concrete examples with numbers.',
  }
};

// ─── Rainbow Chart Constants (static, outside initApp) ───────
const RAINBOW_GENESIS = new Date('2009-01-03').getTime();
const RAINBOW_A = 5.84509376;
const RAINBOW_B_BOUNDS = [-18.763, -18.430, -18.096, -17.763, -17.430, -17.096, -16.763, -16.430, -16.096, -15.763];
const RAINBOW_BAND_COLORS = [
  '#1a237e','#1565c0','#0277bd','#00695c',
  '#2e7d32','#827717','#e65100','#b71c1c','#880e4f'
];
const RAINBOW_BAND_FILLS = [
  'rgba(26,35,126,0.55)','rgba(21,101,192,0.50)','rgba(2,119,189,0.45)','rgba(0,105,92,0.45)',
  'rgba(46,125,50,0.45)','rgba(130,119,23,0.45)','rgba(230,81,0,0.45)','rgba(183,28,28,0.45)','rgba(136,14,79,0.50)'
];
const RAINBOW_BAND_NAMES_ZH = [
  '🔵 极度低估（火灾价）','🔵 买入机会','🔵 积累期','🟢 还算便宜',
  '🟡 HODL 持有','🟠 这是泡沫吗？','🟠 FOMO 来了','🔴 认真卖出','🔴 极度泡沫'
];

// ─── Main App Wrapper ────────────────────────────────────────
function initApp(lang) {
  const curLang = lang;
  let RAINBOW_BAND_NAMES_CURRENT = curLang === 'en' ? I18N.en.bandNames : RAINBOW_BAND_NAMES_ZH;

  function T(key) { return I18N[curLang]?.[key] ?? I18N.zh[key] ?? key; }

  function rainbowBandPrice(dateMs, bVal) {
    const days = (dateMs - RAINBOW_GENESIS) / 86400000;
    if (days <= 1) return null;
    return Math.pow(10, RAINBOW_A * Math.log10(days) + bVal);
  }

  // ─── State ────────────────────────────────────────────────
  let state = {
    btcPrice: 0, btc1hChange: 0, btc24hChange: 0,
    dvol: 0, dvol1hChange: 0,
    ivp: 0, ivr: 0,
    fng: 0, fngLabel: '',
    dvolHistory: [], fngHistory: [],
    putOptions: [], callOptions: [],
    position: 'usdt',
    putSortKey: 'yield', putSortDir: -1,
    callSortKey: 'yield', callSortDir: -1,
  };
  let pnlChart = null, dvolChartObj = null, fngChartObj = null, rainbowChartObj = null;

  // ─── Math: Black-Scholes ───────────────────────────────────
  function normalCDF(x) {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const p = d * t * (0.319382 + t * (-0.356564 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - p : p;
  }
  function bsDelta(S, K, T, sigma, isCall) {
    if (T <= 0) return isCall ? (S > K ? 1 : 0) : (S < K ? -1 : 0);
    const d1 = (Math.log(S / K) + (sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
    return isCall ? normalCDF(d1) : normalCDF(d1) - 1;
  }
  function annualYield(premiumUsd, strikeUsd, daysToExpiry) {
    if (!strikeUsd || !daysToExpiry) return 0;
    return (premiumUsd / strikeUsd) * (365 / daysToExpiry) * 100;
  }

  // ─── Fetch helpers ─────────────────────────────────────────
  async function fetchJson(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }

  // ─── 1. BTC Price (Binance) ────────────────────────────────
  async function fetchBtcPrice() {
    try {
      const [ticker, klines] = await Promise.all([
        fetchJson('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'),
        fetchJson('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=3'),
      ]);
      state.btcPrice = parseFloat(ticker.lastPrice);
      state.btc24hChange = parseFloat(ticker.priceChangePercent);
      if (klines.length >= 2) {
        const prev = parseFloat(klines[klines.length - 2][4]);
        const cur = parseFloat(klines[klines.length - 1][4]);
        state.btc1hChange = ((cur - prev) / prev) * 100;
      }
    } catch(e) { console.warn('Binance:', e.message); }
  }

  // ─── 2. DVOL + IVP (Deribit) ──────────────────────────────
  async function fetchDvol() {
    try {
      const now = Date.now();
      const day = 86400000;
      const url90 = `https://www.deribit.com/api/v2/public/get_volatility_index_data?currency=BTC&start_timestamp=${now - 90 * day}&end_timestamp=${now}&resolution=3600`;
      const url1y = `https://www.deribit.com/api/v2/public/get_volatility_index_data?currency=BTC&start_timestamp=${now - 365 * day}&end_timestamp=${now}&resolution=86400`;
      const [r90, r1y] = await Promise.all([fetchJson(url90), fetchJson(url1y)]);
      const data90 = r90.result?.data || [];
      const data1y = r1y.result?.data || [];
      if (data90.length >= 2) {
        state.dvol = data90[data90.length - 1][4];
        const prev1h = data90[data90.length - 2][4];
        state.dvol1hChange = prev1h ? ((state.dvol - prev1h) / prev1h) * 100 : 0;
        state.dvolHistory = data90.slice(-90).map(d => ({ t: d[0], v: d[4] }));
      }
      if (data1y.length > 10) {
        const closes = data1y.map(d => d[4]).filter(Boolean);
        const cur = state.dvol;
        const below = closes.filter(v => v <= cur).length;
        state.ivp = Math.round((below / closes.length) * 100);
        const mn = Math.min(...closes), mx = Math.max(...closes);
        state.ivr = mx > mn ? Math.round(((cur - mn) / (mx - mn)) * 100) : 50;
      }
    } catch(e) { console.warn('Deribit DVOL:', e.message); }
  }

  // ─── 3. Fear & Greed (Alternative.me) ────────────────────
  async function fetchFearGreed() {
    try {
      const r = await fetchJson('https://api.alternative.me/fng/?limit=90');
      const data = r.data || [];
      if (data.length) {
        state.fng = parseInt(data[0].value);
        state.fngLabel = data[0].value_classification;
        state.fngHistory = data.slice(0, 90).reverse().map(d => ({
          t: parseInt(d.timestamp) * 1000, v: parseInt(d.value)
        }));
      }
    } catch(e) { console.warn('F&G:', e.message); }
  }

  // ─── 4. Options (Deribit) ─────────────────────────────────
  async function fetchOptions() {
    try {
      const r = await fetchJson('https://www.deribit.com/api/v2/public/get_book_summary_by_currency?currency=BTC&kind=option');
      const items = r.result || [];
      const now = Date.now();
      const S = state.btcPrice || 80000;
      const processed = items.map(opt => {
        const name = opt.instrument_name;
        const parts = name.split('-');
        if (parts.length < 4) return null;
        const type = parts[3];
        const strike = parseInt(parts[2]);
        const expiryStr = parts[1];
        const expiry = parseDeribitExpiry(expiryStr);
        if (!expiry) return null;
        const daysLeft = Math.round((expiry - now) / 86400000);
        if (daysLeft < 1 || daysLeft > 180) return null;
        const iv = (opt.mark_iv || 0) / 100;
        const markPriceBtc = opt.mark_price || 0;
        const premiumUsd = markPriceBtc * S;
        const delta = bsDelta(S, strike, daysLeft / 365, iv, type === 'C');
        const yld = annualYield(premiumUsd, strike, daysLeft);
        return { name, type, strike, expiry, expiryStr, daysLeft, iv: opt.mark_iv || 0, markPriceBtc, premiumUsd, delta, yield: yld };
      }).filter(Boolean);
      state.putOptions = processed.filter(o => o.type === 'P' && o.strike < S * 1.01).sort((a, b) => b.yield - a.yield);
      state.callOptions = processed.filter(o => o.type === 'C' && o.strike > S * 0.99).sort((a, b) => b.yield - a.yield);
    } catch(e) { console.warn('Options:', e.message); }
  }

  function parseDeribitExpiry(s) {
    const months = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
    const m = s.match(/(\d+)([A-Z]+)(\d+)/);
    if (!m) return null;
    const day = parseInt(m[1]);
    const mon = months[m[2]];
    const year = 2000 + parseInt(m[3]);
    if (mon === undefined) return null;
    return new Date(Date.UTC(year, mon, day, 8, 0, 0)).getTime();
  }

  // ─── 5. Rainbow Chart Data (Binance weekly → resample to monthly) ───
  async function fetchRainbowData() {
    try {
      const r = await fetchJson('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1w&limit=500');
      if (!Array.isArray(r) || r.length < 10) return [];
      const monthly = {};
      r.forEach(k => {
        const d = new Date(parseInt(k[0]));
        const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
        monthly[key] = { t: Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1), price: parseFloat(k[4]) };
      });
      return Object.values(monthly).sort((a, b) => a.t - b.t);
    } catch(e) { console.warn('Rainbow fetch:', e.message); return []; }
  }

  function drawRainbowChart(priceHistory) {
    const locale = curLang === 'zh' ? 'zh-CN' : 'en-US';
    const axisStart = new Date(Date.UTC(2017, 6, 1));
    const axisEndDate = new Date(Date.now() + 2 * 365 * 86400000);
    const axisDates = [];
    let ay = axisStart.getUTCFullYear(), am = axisStart.getUTCMonth();
    while (true) {
      const t = Date.UTC(ay, am, 1);
      if (t > axisEndDate.getTime()) break;
      axisDates.push(t);
      am++;
      if (am > 11) { am = 0; ay++; }
    }

    const priceMap = {};
    priceHistory.forEach(p => {
      const d = new Date(p.t);
      priceMap[`${d.getUTCFullYear()}-${d.getUTCMonth()}`] = p.price;
    });

    const labels = axisDates.map(t =>
      new Date(t).toLocaleDateString(locale, { year: '2-digit', month: 'short' })
    );

    const datasets = [];

    for (let i = 0; i < RAINBOW_B_BOUNDS.length - 1; i++) {
      const vals = axisDates.map(t => rainbowBandPrice(t, RAINBOW_B_BOUNDS[i]));
      datasets.push({
        data: vals,
        borderColor: 'transparent',
        backgroundColor: RAINBOW_BAND_FILLS[i],
        fill: '+1',
        pointRadius: 0,
        borderWidth: 0,
        tension: 0.3,
        order: RAINBOW_B_BOUNDS.length - i + 1,
      });
    }
    datasets.push({
      data: axisDates.map(t => rainbowBandPrice(t, RAINBOW_B_BOUNDS[RAINBOW_B_BOUNDS.length - 1])),
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      fill: false,
      pointRadius: 0,
      borderWidth: 0,
      order: 1,
    });

    const priceData = axisDates.map(t => {
      const d = new Date(t);
      const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
      return priceMap[key] || null;
    });
    datasets.push({
      label: T('chartBtcClose'),
      data: priceData,
      borderColor: '#ffffff',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      fill: false,
      spanGaps: true,
      tension: 0.2,
      order: 0,
    });

    const nowIdx = axisDates.findIndex(t => t > Date.now()) - 1;
    const dotData = axisDates.map((_, i) => i === Math.max(nowIdx, 0) ? state.btcPrice : null);
    datasets.push({
      label: T('chartCurrentPrice'),
      data: dotData,
      borderColor: '#fff',
      backgroundColor: '#fff',
      pointRadius: axisDates.map((_, i) => i === Math.max(nowIdx, 0) ? 6 : 0),
      pointBorderWidth: 2,
      fill: false,
      spanGaps: true,
      order: 0,
    });

    if (rainbowChartObj) rainbowChartObj.destroy();
    const ctx = document.getElementById('rainbowChart').getContext('2d');
    rainbowChartObj = new Chart(ctx, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            filter: item => item.datasetIndex >= RAINBOW_B_BOUNDS.length,
            callbacks: {
              label: c => c.raw ? ' $' + Math.round(c.raw).toLocaleString() : ''
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(48,54,61,0.4)' },
            ticks: { color: '#8b949e', font: { size: 9 }, maxTicksLimit: 12 }
          },
          y: {
            type: 'logarithmic',
            grid: { color: 'rgba(48,54,61,0.4)' },
            ticks: {
              color: '#8b949e', font: { size: 10 },
              callback: v => {
                const map = {100:'$100',1000:'$1k',10000:'$10k',100000:'$100k',1000000:'$1M'};
                return map[v] || '';
              }
            }
          }
        }
      }
    });

    updateRainbowBandBadge();

    const legend = document.getElementById('rainbowLegend');
    legend.innerHTML = RAINBOW_BAND_NAMES_CURRENT.map((name, i) =>
      `<div class="rl-item"><div class="rl-dot" style="background:${RAINBOW_BAND_COLORS[i]}"></div>${name.replace(/^[^\s]+\s/,'')}</div>`
    ).join('');
  }

  function updateRainbowBandBadge() {
    if (!state.btcPrice) return;
    const days = (Date.now() - RAINBOW_GENESIS) / 86400000;
    const logDays = Math.log10(days);
    let band = -1;
    for (let i = 0; i < RAINBOW_B_BOUNDS.length - 1; i++) {
      const lo = Math.pow(10, RAINBOW_A * logDays + RAINBOW_B_BOUNDS[i]);
      const hi = Math.pow(10, RAINBOW_A * logDays + RAINBOW_B_BOUNDS[i + 1]);
      if (state.btcPrice >= lo && state.btcPrice < hi) { band = i; break; }
    }
    if (band === -1) {
      const top = Math.pow(10, RAINBOW_A * logDays + RAINBOW_B_BOUNDS[RAINBOW_B_BOUNDS.length - 1]);
      band = state.btcPrice >= top ? 8 : 0;
    }
    const badge = document.getElementById('rainbowBandBadge');
    const dot   = document.getElementById('rainbowBandDot');
    const name  = document.getElementById('rainbowBandName');
    const color = RAINBOW_BAND_COLORS[band];
    const fill  = RAINBOW_BAND_FILLS[band];
    badge.style.background = fill;
    badge.style.borderColor = color;
    badge.style.color = '#fff';
    dot.style.background = color;
    name.textContent = RAINBOW_BAND_NAMES_CURRENT[band].replace(/^[^\s]+\s/, '');
  }

  // ─── Score Calculation ─────────────────────────────────────
  function calcSignals() {
    const dropPct = Math.abs(Math.min(state.btc1hChange, 0));
    const sig1 = Math.min(dropPct / 2.5, 1) * 100;
    const dvolRise = Math.max(state.dvol1hChange, 0);
    const sig2 = Math.min(dvolRise / 5, 1) * 100;
    const sig3 = Math.min(state.ivp, 100);
    const putScore = Math.round((sig1 * 0.35 + sig2 * 0.30 + sig3 * 0.35));

    const ccDvol = Math.min(state.dvol / 80, 1) * 100;
    const ccFng = Math.min(state.fng, 100);
    const rise = Math.max(state.btc1hChange, 0);
    const ccRise = Math.min(rise / 2, 1) * 100;
    const callScore = Math.round(ccDvol * 0.4 + ccFng * 0.35 + ccRise * 0.25);

    return { sig1, sig2, sig3, putScore, ccDvol, ccFng, ccRise, callScore };
  }

  // ─── UI Updates ────────────────────────────────────────────
  function updateHeader() {
    const locale = curLang === 'zh' ? 'zh-CN' : 'en-US';
    const p = state.btcPrice;
    document.getElementById('btcPrice').textContent = p ? '$' + p.toLocaleString('en-US', {maximumFractionDigits:0}) : '--';
    setChange('priceChange1h', state.btc1hChange, '1h');
    setChange('priceChange24h', state.btc24hChange, '24h');
    document.getElementById('lastUpdate').textContent = T('updatedAt') + new Date().toLocaleTimeString(locale);
  }
  function setChange(id, val, label) {
    const el = document.getElementById(id);
    const sign = val >= 0 ? '+' : '';
    el.textContent = `${label} ${sign}${val.toFixed(2)}%`;
    el.className = 'price-change ' + (val >= 0 ? 'up' : 'down');
  }

  function updateMetrics() {
    const dv = state.dvol.toFixed(1);
    document.getElementById('dvolNow').textContent = dv;
    const dc = state.dvol1hChange;
    document.getElementById('dvolChange').innerHTML = `<span style="color:${dc>=0?'var(--red)':'var(--green)'}">${dc>=0?'+':''}${dc.toFixed(1)}% (1h)</span>`;
    const ivp = state.ivp;
    document.getElementById('ivpNow').textContent = ivp + '%';
    document.getElementById('ivpDesc').textContent = ivp >= 70 ? T('ivpHigh') : ivp <= 30 ? T('ivpLow') : T('ivpMid');
    document.getElementById('ivpDesc').style.color = ivp >= 70 ? 'var(--green)' : ivp <= 30 ? 'var(--muted)' : 'var(--orange)';
    document.getElementById('fngNow').textContent = state.fng;
    const fl = state.fngLabel || '';
    document.getElementById('fngDesc').textContent = fl;
    const f = state.fng;
    document.getElementById('fngNow').style.color = f <= 25 ? 'var(--red)' : f >= 75 ? 'var(--green)' : 'var(--orange)';
    const h1 = state.btc1hChange;
    document.getElementById('btc1h').textContent = (h1 >= 0 ? '+' : '') + h1.toFixed(2) + '%';
    document.getElementById('btc1h').style.color = h1 >= 0 ? 'var(--green)' : 'var(--red)';
  }

  function updateSignalBars(s) {
    setBar('sig-drop', s.sig1, T('sigDropVal')(Math.abs(state.btc1hChange).toFixed(2)));
    setBar('sig-dvol', s.sig2, T('sigDvolVal')(state.dvol1hChange.toFixed(1)));
    setBar('sig-ivp', s.sig3, T('sigIvpVal')(state.ivp));
    setBar('sig-cc-dvol', s.ccDvol, T('sigCcDvolVal')(state.dvol.toFixed(1)));
    setBar('sig-cc-fng', s.ccFng, T('sigCcFngVal')(state.fng));
    setBar('sig-cc-rise', s.ccRise, T('sigCcRiseVal')(state.btc1hChange.toFixed(2)));
    setScore('putScore', 'putScoreDesc', s.putScore, 'var(--put)');
    setScore('callScore', 'callScoreDesc', s.callScore, 'var(--call)');
  }
  function setBar(id, pct, valText) {
    const p = Math.min(Math.round(pct), 100);
    const bar = document.getElementById(id + '-bar');
    const val = document.getElementById(id + '-val');
    if (bar) { bar.style.width = p + '%'; bar.className = 'bar-fill ' + (p >= 80 ? 'green' : p >= 40 ? 'orange' : 'gray'); }
    if (val) val.textContent = valText;
  }
  function setScore(scoreId, descId, score, color) {
    const el = document.getElementById(scoreId);
    const desc = document.getElementById(descId);
    if (el) { el.textContent = score; el.style.color = color; }
    if (desc) {
      if (score >= 70) { desc.textContent = T('scoreHigh'); desc.className = 'score-desc high'; }
      else if (score >= 40) { desc.textContent = T('scoreMid'); desc.className = 'score-desc mid'; }
      else { desc.textContent = T('scoreLow'); desc.className = 'score-desc low'; }
    }
  }

  function updateDecisionCard(s) {
    const card = document.getElementById('decisionCard');
    const badge = document.getElementById('decisionBadge');
    const reason = document.getElementById('decisionReason');
    const isPut = state.position === 'usdt';
    const score = isPut ? s.putScore : s.callScore;
    let rec, cls, txt;
    if (isPut) {
      if (score >= 65) { rec = T('recSellPut'); cls = 'sell-put'; txt = T('reasonPut1')(state.ivp, state.dvol.toFixed(1)); }
      else if (score >= 35) { rec = T('recLight'); cls = 'wait'; txt = T('reasonPut2')(score); }
      else { rec = T('recWatch'); cls = 'wait'; txt = T('reasonPut3')(score); }
    } else {
      if (score >= 65) { rec = T('recSellCall'); cls = 'sell-call'; txt = T('reasonCall1')(state.fng, state.dvol.toFixed(1)); }
      else if (score >= 35) { rec = T('recLight'); cls = 'wait'; txt = T('reasonCall2')(score); }
      else { rec = T('recWatch'); cls = 'wait'; txt = T('reasonCall3')(score); }
    }
    card.className = 'decision-card ' + cls;
    badge.className = 'decision-badge ' + cls;
    badge.textContent = rec;
    reason.textContent = txt;
  }

  // ─── Position Toggle ───────────────────────────────────────
  function setPosition(p) {
    state.position = p;
    document.getElementById('posUsdt').className = 'pos-btn' + (p === 'usdt' ? ' active' : '');
    document.getElementById('posBtc').className = 'pos-btn' + (p === 'btc' ? ' active' : '');
    const s = calcSignals();
    updateDecisionCard(s);
  }

  // ─── Options Tables ────────────────────────────────────────
  function riskBadge(delta, type) {
    const absDelta = Math.abs(delta);
    if (absDelta <= 0.20) return `<span class="badge rec">${T('badgeCons')}</span>`;
    if (absDelta <= 0.30) return `<span class="badge rec">${T('badgeNovice')}</span>`;
    if (absDelta <= 0.40) return `<span class="badge caution">${T('badgeMod')}</span>`;
    return `<span class="badge risky">${T('badgeAggr')}</span>`;
  }
  function yieldCell(y) {
    if (y >= 20) return `<span class="yield-good">${y.toFixed(1)}%</span>`;
    if (y >= 10) return `<span class="yield-mid">${y.toFixed(1)}%</span>`;
    return `<span class="yield-low">${y.toFixed(1)}%</span>`;
  }
  function renderPutTable() {
    const minDays = parseInt(document.getElementById('put-min-days').value) || 7;
    const maxDays = parseInt(document.getElementById('put-max-days').value) || 45;
    const minYield = parseFloat(document.getElementById('put-min-yield').value) || 0;
    const risk = document.getElementById('put-risk').value;
    const maxDelta = risk === 'conservative' ? 0.25 : risk === 'moderate' ? 0.40 : 1;
    let opts = state.putOptions.filter(o =>
      o.daysLeft >= minDays && o.daysLeft <= maxDays &&
      o.yield >= minYield && Math.abs(o.delta) <= maxDelta
    );
    opts = sortOpts(opts, state.putSortKey, state.putSortDir).slice(0, 30);
    const S = state.btcPrice || 80000;
    const tbody = document.getElementById('put-tbody');
    if (!opts.length) { tbody.innerHTML = `<tr class="empty-row"><td colspan="9">${T('noContracts')}</td></tr>`; return; }
    tbody.innerHTML = opts.map(o => {
      const be = (o.strike - o.premiumUsd).toFixed(0);
      const bePct = (((o.strike - S) / S) * 100).toFixed(1);
      return `<tr>
        <td><strong>$${o.strike.toLocaleString()}</strong> <span style="color:var(--muted);font-size:11px">(${bePct}%)</span></td>
        <td>${o.expiryStr}</td>
        <td>${o.daysLeft}${T('daysUnit')}</td>
        <td style="color:${Math.abs(o.delta)<0.25?'var(--green)':'var(--orange)'}">${o.delta.toFixed(3)}</td>
        <td>${o.iv.toFixed(1)}%</td>
        <td>${yieldCell(o.yield)}</td>
        <td>$${o.premiumUsd.toFixed(0)}</td>
        <td>$${parseInt(be).toLocaleString()}</td>
        <td>${riskBadge(o.delta,'P')}</td>
      </tr>`;
    }).join('');
  }
  function renderCallTable() {
    const minDays = parseInt(document.getElementById('call-min-days').value) || 7;
    const maxDays = parseInt(document.getElementById('call-max-days').value) || 45;
    const minYield = parseFloat(document.getElementById('call-min-yield').value) || 0;
    const risk = document.getElementById('call-risk').value;
    const maxDelta = risk === 'conservative' ? 0.25 : risk === 'moderate' ? 0.40 : 1;
    const S = state.btcPrice || 80000;
    let opts = state.callOptions.filter(o =>
      o.daysLeft >= minDays && o.daysLeft <= maxDays &&
      o.yield >= minYield && o.delta <= maxDelta && o.strike > S
    );
    opts = sortOpts(opts, state.callSortKey, state.callSortDir).slice(0, 30);
    const tbody = document.getElementById('call-tbody');
    if (!opts.length) { tbody.innerHTML = `<tr class="empty-row"><td colspan="9">${T('noContracts')}</td></tr>`; return; }
    tbody.innerHTML = opts.map(o => {
      const upPct = (((o.strike - S) / S) * 100).toFixed(1);
      return `<tr>
        <td><strong>$${o.strike.toLocaleString()}</strong> <span style="color:var(--muted);font-size:11px">(+${upPct}%)</span></td>
        <td>${o.expiryStr}</td>
        <td>${o.daysLeft}${T('daysUnit')}</td>
        <td style="color:${o.delta<0.25?'var(--green)':'var(--orange)'}">${o.delta.toFixed(3)}</td>
        <td>${o.iv.toFixed(1)}%</td>
        <td>${yieldCell(o.yield)}</td>
        <td>$${o.premiumUsd.toFixed(0)}</td>
        <td>$${o.strike.toLocaleString()}</td>
        <td>${riskBadge(o.delta,'C')}</td>
      </tr>`;
    }).join('');
  }

  function sortOpts(arr, key, dir) {
    return [...arr].sort((a, b) => {
      const va = key === 'delta' ? Math.abs(a.delta) : a[key];
      const vb = key === 'delta' ? Math.abs(b.delta) : b[key];
      return dir * (vb - va);
    });
  }
  function sortTable(type, key) {
    if (type === 'put') {
      state.putSortDir = state.putSortKey === key ? -state.putSortDir : -1;
      state.putSortKey = key;
      renderPutTable();
    } else {
      state.callSortDir = state.callSortKey === key ? -state.callSortDir : -1;
      state.callSortKey = key;
      renderCallTable();
    }
  }

  // ─── Risk Calculator ───────────────────────────────────────
  function updateCalc() {
    const type = document.getElementById('calc-type').value;
    const capital = parseFloat(document.getElementById('calc-capital').value) || 10000;
    const strike = parseFloat(document.getElementById('calc-strike').value) || 75000;
    const days = parseFloat(document.getElementById('calc-days').value) || 14;
    const premium = parseFloat(document.getElementById('calc-premium').value) || 400;
    const S = parseFloat(document.getElementById('calc-btc-price').value) || state.btcPrice || 80000;
    document.getElementById('calc-btc-price').value = S;
    const margin = strike * 0.1;
    const maxProfit = premium;
    const breakeven = type === 'put' ? strike - premium : strike + premium;
    const maxLoss = type === 'put' ? (strike - premium) : 9999999;
    const annRate = (premium / strike) * (365 / days) * 100;
    const prob = Math.abs(bsDelta(S, strike, days / 365, 0.7, type === 'call')) * 100;
    document.getElementById('res-max-profit').textContent = '+$' + maxProfit.toLocaleString();
    document.getElementById('res-max-loss').textContent = type === 'put' ? '-$' + parseInt(maxLoss).toLocaleString() + T('calcExtreme') : T('calcHoldingLoss');
    document.getElementById('res-breakeven').textContent = '$' + parseInt(breakeven).toLocaleString();
    document.getElementById('res-margin').textContent = '$' + parseInt(margin).toLocaleString() + T('calcMarginPct')((margin / capital * 100).toFixed(0));
    document.getElementById('res-annual').textContent = annRate.toFixed(1) + '%';
    document.getElementById('res-prob').textContent = prob.toFixed(0) + '%';
    drawPnlChart(type, strike, premium, S);
  }
  function drawPnlChart(type, strike, premium, S) {
    const prices = [];
    const pnls = [];
    const range = strike * 0.4;
    for (let p = strike - range; p <= strike + range; p += range / 40) {
      prices.push(Math.round(p));
      let pnl;
      if (type === 'put') {
        pnl = p >= strike ? premium : premium - (strike - p);
      } else {
        pnl = p <= strike ? premium : premium - (p - strike);
      }
      pnls.push(pnl);
    }
    const colors = pnls.map(v => v >= 0 ? 'rgba(63,185,80,0.8)' : 'rgba(248,81,73,0.8)');
    if (pnlChart) pnlChart.destroy();
    const ctx = document.getElementById('pnlChart').getContext('2d');
    pnlChart = new Chart(ctx, {
      type: 'bar',
      data: { labels: prices.map(p => '$' + (p / 1000).toFixed(0) + 'k'), datasets: [{ data: pnls, backgroundColor: colors, borderWidth: 0 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' $' + Math.round(c.raw) } } },
        scales: {
          x: { grid: { color: 'rgba(48,54,61,.5)' }, ticks: { color: '#8b949e', font: { size: 10 }, maxRotation: 0, maxTicksLimit: 6 } },
          y: { grid: { color: 'rgba(48,54,61,.5)' }, ticks: { color: '#8b949e', font: { size: 10 } } }
        }
      }
    });
  }

  // ─── Charts ────────────────────────────────────────────────
  function drawDvolChart() {
    const locale = curLang === 'zh' ? 'zh-CN' : 'en-US';
    if (!state.dvolHistory.length) return;
    if (dvolChartObj) dvolChartObj.destroy();
    const ctx = document.getElementById('dvolChart').getContext('2d');
    const labels = state.dvolHistory.map(d => new Date(d.t).toLocaleDateString(locale, { month: 'short', day: 'numeric' }));
    const values = state.dvolHistory.map(d => d.v);
    dvolChartObj = new Chart(ctx, {
      type: 'line',
      data: { labels, datasets: [{ data: values, borderColor: '#58a6ff', backgroundColor: 'rgba(88,166,255,0.1)', borderWidth: 1.5, pointRadius: 0, fill: true, tension: 0.3 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' DVOL: ' + c.raw.toFixed(1) } } },
        scales: {
          x: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 10 }, maxTicksLimit: 8 } },
          y: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 10 } } }
        }
      }
    });
  }
  function drawFngChart() {
    const locale = curLang === 'zh' ? 'zh-CN' : 'en-US';
    if (!state.fngHistory.length) return;
    if (fngChartObj) fngChartObj.destroy();
    const ctx = document.getElementById('fngChart').getContext('2d');
    const labels = state.fngHistory.map(d => new Date(d.t).toLocaleDateString(locale, { month: 'short', day: 'numeric' }));
    const values = state.fngHistory.map(d => d.v);
    const colors = values.map(v => v <= 25 ? 'rgba(248,81,73,0.7)' : v >= 75 ? 'rgba(63,185,80,0.7)' : 'rgba(210,153,34,0.7)');
    fngChartObj = new Chart(ctx, {
      type: 'bar',
      data: { labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: 0 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 10 }, maxTicksLimit: 8 } },
          y: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 10 } }, min: 0, max: 100 }
        }
      }
    });
  }

  // ─── Tabs ──────────────────────────────────────────────────
  function switchTab(group, tab) {
    const prefix = group + '-tab-';
    document.querySelectorAll('[id^="' + prefix + '"]').forEach(el => el.classList.remove('active'));
    document.getElementById(prefix + tab).classList.add('active');
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      const tabs = ['put', 'call', 'calc'];
      btn.classList.remove('active');
      if (tabs[i] === tab) btn.classList.add('active');
    });
    if (tab === 'calc') updateCalc();
  }

  // ─── Education Accordion ────────────────────────────────────
  function toggleAccordion(header) {
    const body = header.nextElementSibling;
    const arrow = header.querySelector('.accordion-arrow');
    body.classList.toggle('open');
    arrow.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
  }

  // ─── Main Init ─────────────────────────────────────────────
  async function init() {
    await Promise.all([fetchBtcPrice(), fetchDvol(), fetchFearGreed()]);
    updateHeader();
    updateMetrics();
    const s = calcSignals();
    updateSignalBars(s);
    updateDecisionCard(s);
    drawDvolChart();
    drawFngChart();
    updateCalc();
    fetchRainbowData().then(data => {
      drawRainbowChart(data);
      updateRainbowBandBadge();
    });
    await fetchOptions();
    renderPutTable();
    renderCallTable();
  }

  // ─── Expose onclick handlers globally ──────────────────────
  window.setPosition = setPosition;
  window.switchTab = switchTab;
  window.toggleAccordion = toggleAccordion;
  window.sortTable = sortTable;
  window.renderPutTable = renderPutTable;
  window.renderCallTable = renderCallTable;
  window.updateCalc = updateCalc;

  // ─── Run init and set up timers ────────────────────────────
  init();

  // BTC price: every 30s
  setInterval(async () => {
    await fetchBtcPrice();
    updateHeader();
    const s = calcSignals();
    updateSignalBars(s);
    updateDecisionCard(s);
    updateRainbowBandBadge();
  }, 30000);

  // DVOL: every 30 minutes
  setInterval(async () => {
    await fetchDvol();
    updateMetrics();
    drawDvolChart();
    const s = calcSignals();
    updateSignalBars(s);
    updateDecisionCard(s);
  }, 30 * 60 * 1000);

  // Fear & Greed: every 1 hour
  setInterval(async () => {
    await fetchFearGreed();
    updateMetrics();
    drawFngChart();
    const s = calcSignals();
    updateSignalBars(s);
    updateDecisionCard(s);
  }, 60 * 60 * 1000);

  // Options chain: every 5 minutes
  setInterval(async () => {
    await fetchOptions();
    renderPutTable();
    renderCallTable();
  }, 5 * 60 * 1000);
}
