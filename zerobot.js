/* ZeroBot - Zero Level, Siliguri. Rule-based FAQ assistant. No server, no API keys, no data stored. */
(function () {
  var WA = "917001324736", PH = "+91 70013 24736";
  var KB = [
    { k: ["hello", "hi", "hey", "namaste", "good morning", "good evening"], a: "Hello! I'm ZeroBot. I can answer common questions about courses, NIOS/BOSSE, documents and how to reach our counsellors. What would you like to know?" },
    { k: ["mbbs", "neet", "bds", "bams", "bhms", "medical", "doctor"], a: "We guide students on MBBS, BDS, BAMS, BHMS and BUMS admissions. NEET qualification is required for MBBS. A counsellor can suggest realistic options based on your score and budget.", l: ["/mbbs-admission-siliguri/", "MBBS page"] },
    { k: ["btech", "b.tech", "engineering", "polytechnic", "diploma", "jee", "m.tech", "mtech"], a: "We guide on B.Tech, M.Tech, polytechnic and lateral-entry admissions across branches such as CSE, ECE, Mechanical, Civil and AI/ML.", l: ["/engineering-btech-admission/", "Engineering page"] },
    { k: ["mba", "pgdm", "bba", "mca", "bca", "management"], a: "We guide on MBA, PGDM, BBA, BCA and MCA in regular and online modes, including specialisation and college choice.", l: ["/mba-pgdm-admission/", "MBA page"] },
    { k: ["law", "llb", "llm", "ba llb", "lawyer"], a: "We guide on BA LLB, BBA LLB, LLB and LLM admissions. Always confirm Bar Council of India approval for the course.", l: ["/law-admission-ba-llb/", "Law page"] },
    { k: ["nursing", "gnm", "anm", "pharma", "pharmacy", "paramedical", "dmlt", "bmlt"], a: "We guide on GNM, ANM, B.Sc Nursing, pharmacy and paramedical courses. Please confirm INC / PCI recognition for the exact course and college.", l: ["/nursing-admission-gnm-anm-bsc/", "Nursing page"] },
    { k: ["online", "distance", "ugc", "graduation", "degree", "b.com", "bcom", "ignou", "ba "], a: "We guide on online and distance degrees (BA, B.Com, BBA, BCA, MBA, MCA and more). Check the university's current UGC-DEB entitlement for your programme before paying.", l: ["/online-degree-admission/", "Online degree page"] },
    { k: ["nios", "open school"], a: "Zero Level is an authorised NIOS study centre. NIOS suits Class 10 and 12 students who failed, dropped out or need flexibility. Ask us for the current session dates.", l: ["/nios-admission-siliguri/", "NIOS page"] },
    { k: ["bosse", "sikkim board"], a: "Zero Level is an authorised BOSSE admission counsellor. BOSSE offers Class 10 and 12 through open schooling. Please verify the board's acceptance for your next step.", l: ["/bosse-admission-siliguri/", "BOSSE page"] },
    { k: ["failed", "fail", "dropout", "drop out", "10th", "12th", "class 10", "class 12", "gap"], a: "If you failed or left school, options include NIOS and BOSSE for Class 10 and 12. A counsellor will check which suits your goal.", l: ["/guides/nios-vs-bosse/", "NIOS vs BOSSE guide"] },
    { k: ["course", "courses", "list", "available", "ed", "b.ed", "bed", "d.el.ed"], a: "We guide on 100+ courses: medical, nursing, pharmacy, engineering, management, law, online degrees, teacher training (B.Ed, M.Ed, D.El.Ed), science and board exams.", l: ["/courses/", "All courses"] },
    { k: ["fee", "fees", "cost", "price", "kitna", "charges", "payment"], a: "Fees differ by college and board and change every year, so I can't quote a number. Our counselling is free, and a counsellor can share current fee details in writing. Always confirm fees directly with the institution before paying." },
    { k: ["document", "documents", "papers", "certificate", "required"], a: "Commonly needed: mark sheets, ID proof, passport-size photographs and, if applicable, a category or transfer certificate. Requirements vary by course, so a counsellor will confirm your exact list." },
    { k: ["loan", "scholarship", "hostel", "emi"], a: "We help with education loan and scholarship guidance and with arranging hostels at partner colleges. Eligibility and terms are set by the bank or institution." },
    { k: ["address", "where", "location", "office", "visit", "map", "direction"], a: "Head Office: Ward No. 40, North Ektiasal, Kalibari Road, Behind Khai Khai Bazar, Siliguri - 734001, West Bengal. Walk-ins are welcome during working hours.", l: ["/contact/", "Contact page"] },
    { k: ["time", "timing", "hours", "open", "sunday"], a: "Office hours: Monday to Saturday, 9 AM to 7 PM. You can WhatsApp us any time and we will reply in working hours." },
    { k: ["phone", "call", "contact", "number", "whatsapp", "email", "counsellor", "counselor", "talk"], a: "You can call or WhatsApp " + PH + " or email info@zerolevelslg.com. Use the buttons below to reach a counsellor directly.", l: ["/contact/", "Contact page"] },
    { k: ["gst", "msme", "udyam", "licence", "license", "registered", "authorised", "authorized", "genuine", "trusted"], a: "Zero Level, Siliguri has been operating since 2013 and holds GST, UDYAM (MSME) and trade licence registrations, and is an authorised NIOS study centre and BOSSE admission counsellor. Details are on our About page.", l: ["/about/", "About us"] },
    { k: ["review", "reviews", "rating", "testimonial"], a: "Student reviews from our Google profile are on the homepage.", l: ["/#reviews", "See reviews"] },
    { k: ["guarantee", "100%", "sure admission", "assured"], a: "No consultancy can honestly guarantee a seat. We guide you toward realistic options based on your marks, budget and goals." },
    { k: ["thank", "thanks", "ok", "okay"], a: "You're welcome! Anything else I can help with?" }
  ];
  var CHIPS = ["Courses", "NIOS / BOSSE", "Documents needed", "Fees", "Talk to counsellor"];
  var FALLBACK = "I'm not sure about that one. A counsellor can answer it properly. Use the buttons below to WhatsApp or call us.";

  var css = ".zb-btn{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:9999;background:#0a3d8f;color:#fff;border:0;border-radius:28px;padding:12px 18px;font:600 15px system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3)}" +
    ".zb-box{position:fixed;right:16px;bottom:calc(76px + env(safe-area-inset-bottom,0px));width:min(360px,calc(100vw - 32px));height:min(520px,70vh);z-index:9999;display:none;flex-direction:column;background:#fff;color:#1b2433;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.35);overflow:hidden;font:15px/1.45 system-ui,sans-serif}" +
    "@media(prefers-color-scheme:dark){.zb-box{background:#18202e;color:#e8edf5}.zb-b{background:#243049!important;color:#e8edf5!important}.zb-in{background:#10151f!important;color:#e8edf5!important}}" +
    ".zb-box.on{display:flex}.zb-h{background:#0a3d8f;color:#fff;padding:12px 14px;display:flex;justify-content:space-between;align-items:center}.zb-h small{display:block;opacity:.85;font-size:12px}" +
    ".zb-x{background:none;border:0;color:#fff;font-size:22px;cursor:pointer}.zb-m{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px}" +
    ".zb-b{max-width:86%;padding:9px 12px;border-radius:12px;background:#eef3fb;color:#1b2433;word-wrap:break-word}.zb-b.u{align-self:flex-end;background:#0a3d8f!important;color:#fff!important}" +
    ".zb-b a{color:inherit;font-weight:600}.zb-c{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px}.zb-c button,.zb-a a{border:1px solid #0a3d8f;background:transparent;color:#0a3d8f;border-radius:16px;padding:5px 10px;font:13px system-ui,sans-serif;cursor:pointer;text-decoration:none}" +
    "@media(prefers-color-scheme:dark){.zb-c button,.zb-a a{color:#9cc1ff;border-color:#9cc1ff}}.zb-a{display:flex;gap:6px;padding:0 12px 8px}" +
    ".zb-f{display:flex;border-top:1px solid #d5dbe6}.zb-in{flex:1;border:0;padding:12px;font:15px system-ui,sans-serif;background:#fff;color:#1b2433;outline:0}.zb-s{border:0;background:#0a3d8f;color:#fff;padding:0 16px;cursor:pointer;font-size:18px}" +
    ".zb-n{font-size:11px;opacity:.7;padding:4px 12px 8px}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var btn = document.createElement("button"); btn.className = "zb-btn"; btn.type = "button";
  btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "zb-box"); btn.textContent = "Ask ZeroBot";
  var box = document.createElement("div"); box.className = "zb-box"; box.id = "zb-box"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "ZeroBot admissions assistant");
  box.innerHTML = '<div class="zb-h"><div><strong>ZeroBot</strong><small>Admissions assistant, Zero Level, Siliguri</small></div><button class="zb-x" type="button" aria-label="Close chat">&times;</button></div>' +
    '<div class="zb-m" aria-live="polite"></div><div class="zb-c"></div>' +
    '<div class="zb-a"><a target="_blank" rel="noopener" href="https://wa.me/' + WA + '?text=Hello%20Zero%20Level%2C%20I%20need%20admission%20guidance">WhatsApp</a><a href="tel:+' + WA + '">Call</a></div>' +
    '<form class="zb-f"><input class="zb-in" type="text" placeholder="Type your question" aria-label="Your question" autocomplete="off"><button class="zb-s" type="submit" aria-label="Send">&#10148;</button></form>' +
    '<div class="zb-n">Automated assistant. Please verify details with a counsellor.</div>';
  document.body.appendChild(box); document.body.appendChild(btn);
  var msgs = box.querySelector(".zb-m"), chips = box.querySelector(".zb-c"), form = box.querySelector("form"), inp = box.querySelector("input");

  function add(text, who, link) {
    var d = document.createElement("div"); d.className = "zb-b" + (who === "u" ? " u" : ""); d.textContent = text;
    if (link) { d.appendChild(document.createElement("br")); var a = document.createElement("a"); a.href = link[0]; a.textContent = link[1] + " \u2192"; d.appendChild(a); }
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
  }
  function answer(q) {
    var t = " " + q.toLowerCase().replace(/[^a-z0-9.\u0900-\u097f ]/g, " ") + " ", best = null, score = 0;
    KB.forEach(function (e) { var s = 0; e.k.forEach(function (w) { if (t.indexOf(" " + w.trim() + " ") > -1 || (w.length > 4 && t.indexOf(w) > -1)) s += w.length; }); if (s > score) { score = s; best = e; } });
    if (best) add(best.a, "b", best.l); else add(FALLBACK, "b");
  }
  function ask(q) { q = q.trim(); if (!q) return; add(q, "u"); setTimeout(function () { answer(q === "Talk to counsellor" ? "talk counsellor" : q); }, 250); }
  CHIPS.forEach(function (c) { var b = document.createElement("button"); b.type = "button"; b.textContent = c; b.onclick = function () { ask(c); }; chips.appendChild(b); });
  form.onsubmit = function (e) { e.preventDefault(); ask(inp.value); inp.value = ""; };
  function toggle(open) {
    var on = open === undefined ? !box.classList.contains("on") : open;
    box.classList.toggle("on", on); btn.setAttribute("aria-expanded", on); btn.textContent = on ? "Close" : "Ask ZeroBot";
    if (on) { if (!msgs.children.length) add("Hi! I'm ZeroBot. Ask me about courses, NIOS/BOSSE, documents or contacting a counsellor. Counselling is free.", "b"); inp.focus(); }
  }
  btn.onclick = function () { toggle(); };
  box.querySelector(".zb-x").onclick = function () { toggle(false); btn.focus(); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) { toggle(false); btn.focus(); } });
})();
