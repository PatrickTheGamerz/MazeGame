<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>UNDERTALE: Eternal Genocide - Determination Edition</title>
    <style>
        @font-face {
            font-family: 'Determination';
            src: url('https://fonts.cdnfonts.com/s/19732/DeterminationMono.woff') format('woff');
        }

        :root {
            --red: #ff0000;
            --yellow: #ffff00;
            --blue: #3498db;
            --white: #ffffff;
            --bg: #000;
            --border: #fff;
        }

        * { box-sizing: border-box; }

        body {
            background: var(--bg);
            color: var(--white);
            font-family: 'Determination', 'Courier New', monospace;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            user-select: none;
        }

        /* --- UI CONTAINER --- */
        #game-window {
            width: 1100px;
            height: 750px;
            border: 6px solid var(--border);
            display: grid;
            grid-template-columns: 300px 1fr;
            grid-template-rows: 1fr 300px;
            background: #000;
            position: relative;
            box-shadow: 0 0 50px rgba(255, 0, 0, 0.2);
        }

        /* --- SIDEBAR --- */
        #sidebar {
            grid-row: 1 / 3;
            border-right: 6px solid var(--border);
            padding: 20px;
            display: flex;
            flex-direction: column;
            background: #050505;
            z-index: 10;
        }

        .stat-label { font-size: 14px; color: #888; text-transform: uppercase; letter-spacing: 2px; margin-top: 10px; }
        .stat-val { font-size: 32px; margin-bottom: 10px; display: block; }
        .lv-text { color: var(--red); text-shadow: 0 0 8px var(--red); }
        .gold-text { color: var(--yellow); }
        .hardmode-tag { 
            color: #ff8800; 
            font-size: 18px; 
            margin-top: 10px;
            border: 1px solid #ff8800;
            padding: 5px;
            text-align: center;
            animation: flicker 0.5s infinite alternate; 
        }

        @keyframes flicker { 0% { opacity: 0.4; box-shadow: 0 0 0px #ff8800; } 100% { opacity: 1; box-shadow: 0 0 10px #ff8800; } }

        /* --- BATTLEFIELD --- */
        #battlefield {
            grid-column: 2;
            position: relative;
            background: radial-gradient(circle, #111 0%, #000 80%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        #monster-sprite {
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 20px;
            transition: transform 0.1s;
        }

        #monster-name { font-size: 42px; margin: 0; letter-spacing: 2px; }
        #monster-desc { font-size: 18px; color: #aaa; margin-top: 5px; font-style: italic; }

        #soul-container {
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
            z-index: 50;
        }

        #soul {
            font-size: 85px;
            color: #fff;
            transform: rotate(180deg);
            transition: color 0.3s, transform 0.1s;
            filter: drop-shadow(0 0 15px rgba(255,255,255,0.4));
        }

        #soul.blue { color: var(--blue); }
        #soul.yellow { color: var(--yellow); transform: rotate(0deg) !important; }
        
        .shake { animation: shake-anim 0.2s infinite; }
        @keyframes shake-anim {
            0% { transform: translate(0,0) rotate(180deg); }
            25% { transform: translate(5px,-5px) rotate(180deg); }
            75% { transform: translate(-5px,5px) rotate(180deg); }
        }

        /* --- HUD BARS --- */
        .hud-bar { width: 500px; height: 35px; background: #300; border: 3px solid #fff; position: relative; margin: 5px 0; }
        #hp-fill { width: 100%; height: 100%; background: var(--yellow); transition: width 0.1s; }
        #stam-fill { width: 100%; height: 100%; background: #0ff; }
        .hud-text { position: absolute; width: 100%; text-align: center; line-height: 35px; font-weight: bold; color: #000; font-size: 18px; }

        /* --- MENU SYSTEM --- */
        #menu-box {
            grid-column: 2;
            border-top: 6px solid var(--border);
            display: flex;
            background: #000;
        }

        .tab-nav { width: 200px; border-right: 6px solid var(--border); display: flex; flex-direction: column; }
        .tab-btn {
            background: none; border: none; color: #fff; padding: 22px;
            font-family: inherit; font-size: 22px; cursor: pointer; text-align: left;
            border-bottom: 1px solid #222;
        }
        .tab-btn:hover, .tab-btn.active { background: #fff; color: #000; }

        #tab-content {
            flex-grow: 1; padding: 20px; display: grid; grid-template-columns: 1fr 1fr;
            gap: 15px; overflow-y: auto; align-content: start;
        }

        .item-card {
            border: 2px solid #333; padding: 15px; background: #0a0a0a;
            display: flex; justify-content: space-between; align-items: center;
        }
        .item-card:hover { border-color: #fff; }
        .item-card b { font-size: 20px; display: block; }
        .item-card small { color: #888; font-size: 13px; }

        .btn-buy {
            background: #000; color: #fff; border: 2px solid #fff; padding: 10px 15px;
            font-family: inherit; cursor: pointer; transition: 0.2s; font-size: 16px;
        }
        .btn-buy:disabled { border-color: #444; color: #444; cursor: not-allowed; }
        .btn-buy:not(:disabled):hover { background: #fff; color: #000; }

        /* --- VFX --- */
        .dmg-num {
            position: absolute; font-size: 42px; color: var(--yellow); font-weight: bold;
            pointer-events: none; animation: rise 0.8s forwards; z-index: 100;
            -webkit-text-stroke: 1px #000;
        }
        @keyframes rise { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-130px); opacity: 0; } }

        .proj { position: absolute; pointer-events: none; z-index: 5; font-size: 30px; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
        .bullet { position: absolute; width: 8px; height: 20px; background: var(--yellow); border-radius: 2px; box-shadow: 0 0 15px var(--yellow); }

        .shard { position: absolute; width: 10px; height: 10px; background: #fff; pointer-events: none; }

        /* --- OVERLAYS --- */
        #no-save-warn { color: #f00; font-size: 13px; margin-top: 10px; display: none; text-align: center; border: 1px solid red; padding: 5px; }
        
        #crt-fx {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05));
            background-size: 100% 4px, 4px 100%; pointer-events: none; z-index: 1000;
        }
    </style>
</head>
<body>

<div id="crt-fx"></div>

<div id="game-window">
    <div id="sidebar">
        <span class="stat-label">CURRENT ZONE</span>
        <span class="stat-val" id="ui-area">RUINS</span>

        <span class="stat-label love">LEVEL OF VIOLENCE</span>
        <span class="stat-val lv-text" id="ui-lv">1</span>

        <span class="stat-label">EXECUTION POINTS</span>
        <span class="stat-val" id="ui-exp">0 / 150</span>

        <span class="stat-label gold">GOLD</span>
        <span class="stat-val gold-text" id="ui-gold">0</span>

        <span class="stat-label">WORLD RESETS</span>
        <span class="stat-val" id="ui-resets">0</span>
        <div id="ui-hardmode" class="hardmode-tag" style="display:none;">HARDMODE ACTIVE</div>

        <div style="margin-top: auto;">
            <button class="btn-buy" id="btn-save" style="width:100%;" onclick="saveGame()">SAVE FILE</button>
            <button id="btn-reset" class="btn-buy" style="width:100%; border-color: cyan; color: cyan; display:none; margin-top:10px;" onclick="doReset()">[RESET WORLD]</button>
            <div id="no-save-warn">NO SAVE DATA DETECTED IN THE VOID.</div>
        </div>
    </div>

    <div id="battlefield">
        <div id="monster-sprite">
            <h1 id="m-name">FROGGIT</h1>
            <p id="m-desc">* Ribbit, ribbit.</p>
        </div>

        <div id="soul-container" onclick="playerAttack(event)">
            <div id="soul">❤</div>
        </div>

        <div class="hud-bar">
            <div id="hp-fill"></div>
            <div class="hud-text" id="hp-txt">HP: 30 / 30</div>
        </div>

        <div class="hud-bar" id="stam-box" style="display:none; border-color: #0ff;">
            <div id="stam-fill"></div>
            <div class="hud-text" style="color:#000">SANS STAMINA</div>
        </div>
    </div>

    <div id="menu-box">
        <div class="tab-nav">
            <button class="tab-btn active" onclick="tab('recruits')">RECRUITS</button>
            <button class="tab-btn" onclick="tab('skills')">SKILL TREE</button>
            <button class="tab-btn" onclick="tab('weapons')">WEAPONS</button>
        </div>
        <div id="tab-content"></div>
    </div>
</div>

<script>
    /**
     * DATABASE - BALANCED FOR FAST PROGRESS
     */
    const DB = {
        regions: [
            { n: "RUINS", k: 5, b: { n: "TORIEL", hp: 400, d: 2, g: 50, e: 100 } },
            { n: "SNOWDIN", k: 8, b: { n: "PAPYRUS", hp: 1200, d: 8, g: 150, e: 400 } },
            { n: "WATERFALL", k: 10, b: { n: "UNDYNE", hp: 2500, d: 20, g: 600, e: 1500 } },
            { n: "HOTLAND", k: 12, b: { n: "METTATON NEO", hp: 1, d: -100, g: 1000, e: 8000 } },
            { n: "CORE", k: 15, b: { n: "ASGORE", hp: 6000, d: 40, g: 5000, e: 25000 } },
            { n: "JUDGEMENT", k: 1, b: { n: "SANS", hp: 1, d: 999, g: 0, e: 200000, isSans: true } }
        ],
        recruits: [
            { id: 'flowey', n: 'Flowey', c: 10, lv: 1, d: "Shoots friendliness pellets." },
            { id: 'toriel', n: 'Toriel', c: 100, lv: 3, d: "Fireball spirals." },
            { id: 'blooky', n: 'Napstablook', c: 300, lv: 5, d: "DoT Acid Rain." },
            { id: 'papyrus', n: 'Papyrus', c: 800, lv: 8, d: "Blue Soul x2 Damage." },
            { id: 'undyne', n: 'Undyne', c: 2000, lv: 12, d: "True Defense Pierce." },
            { id: 'muffet', n: 'Muffet', c: 5000, lv: 14, d: "Gold Stealing Spiders." },
            { id: 'mtt', n: 'Mettaton', c: 15000, lv: 17, d: "High DPS Lasers." },
            { id: 'asgore', n: 'Asgore', c: 40000, lv: 19, d: "Soul-Cleaving Trident." },
            { id: 'sans', n: 'Sans', c: 10000, lv: 20, d: "Gaster Blasters.", r: 1 },
            { id: 'chara', n: 'Chara', c: 99999, lv: 20, d: "The Demon.", r: 2 }
        ],
        weapons: [
            { id: 'stick', n: 'Stick', a: 0, c: 0 },
            { id: 'knife', n: 'Toy Knife', a: 10, c: 15 },
            { id: 'glove', n: 'Tough Glove', a: 25, c: 100 },
            { id: 'shoes', n: 'Ballet Shoes', a: 50, c: 500 },
            { id: 'apron', n: 'Stained Apron', a: 80, c: 1500 },
            { id: 'pan', n: 'Burnt Pan', a: 120, c: 4000 },
            { id: 'knife_real', n: 'Real Knife', a: 999, c: 0, r: 1 }
        ]
    };

    /**
     * LIVE ENGINE STATE
     */
    let state = {
        lv: 1, exp: 0, gold: 0, resets: 0,
        regionIdx: 0, kills: 0,
        mHp: 30, mMaxHp: 30, mName: "Froggit", mDef: 2, mIsBoss: false,
        weapon: 'stick',
        allies: [],
        skills: {}, // Store levels for each ally
        currentTab: 'recruits',
        sansStam: 100,
        isShattering: false,
        canSave: true,
        hm: false
    };

    /**
     * CORE ENGINE FUNCTIONS
     */
    function init() {
        loadGame();
        spawn();
        renderAll();
        
        // Ally Auto-Attack Timer
        setInterval(processAllyAttacks, 1000);
        
        // Auto-Save Timer
        setInterval(() => { if(state.canSave) saveGame(); }, 10000);
    }

    function spawn() {
        state.isShattering = false;
        document.getElementById('soul').style.opacity = 1;
        document.getElementById('soul').classList.remove('shake', 'blue', 'yellow');
        document.getElementById('stam-box').style.display = 'none';
        
        const reg = DB.regions[state.regionIdx];
        const isHM = state.resets >= 5;
        state.hm = isHM;

        // Visual Soul States
        const soul = document.getElementById('soul');
        if (isHM) {
            soul.classList.add('yellow');
            document.getElementById('ui-hardmode').style.display = 'block';
        } else if (state.allies.includes('papyrus')) {
            soul.classList.add('blue');
        }

        // Judgement Path Lockout
        if (reg.n === "JUDGEMENT") {
            state.canSave = false;
            document.getElementById('btn-save').disabled = true;
            document.getElementById('no-save-warn').style.display = 'block';
        }

        if (state.kills >= reg.k) {
            // BOSS SPAWN
            let b = reg.b;
            state.mName = (state.resets >= 1 && b.n === "UNDYNE") ? "UNDYNE THE UNDYING" : b.n;
            state.mMaxHp = b.hp;
            if (isHM) state.mMaxHp *= 5; // Hardmode Boss Scaling
            state.mHp = state.mMaxHp;
            state.mDef = b.d;
            state.mIsBoss = true;
            if (b.isSans) document.getElementById('stam-box').style.display = 'block';
            document.getElementById('m-desc').innerText = "* A boss stands in your way.";
        } else {
            // NORMAL MONSTER SPAWN
            const pool = ["Froggit", "Whimsun", "Loox", "Snowdrake", "Aaron", "Knight Knight"][state.regionIdx];
            state.mName = pool;
            state.mMaxHp = 30 * (state.regionIdx + 1);
            if (isHM) state.mMaxHp *= 3; // Hardmode Normal Scaling
            state.mHp = state.mMaxHp;
            state.mDef = state.regionIdx * 4;
            state.mIsBoss = false;
            document.getElementById('m-desc').innerText = "* Smells like dust.";
        }
        updateUI();
    }

    function playerAttack(e) {
        if (state.isShattering) return;

        // Justice Shooting
        if (state.hm) {
            fireJusticeBullet(e.clientX, e.clientY);
        }

        // Sans Specific Stamina Logic
        if (state.mIsBoss && state.mName === "SANS" && state.sansStam > 0) {
            state.sansStam -= 2;
            document.getElementById('soul').classList.add('shake');
            setTimeout(() => document.getElementById('soul').classList.remove('shake'), 150);
            drawPopup("MISS", e.clientX, e.clientY);
            updateUI();
            return;
        }

        const weapon = DB.weapons.find(w => w.id === state.weapon);
        let dmg = (state.lv * 6) + weapon.a - state.mDef;
        
        // Papyrus Blue Mode Bonus (x2 dmg)
        if (state.allies.includes('papyrus')) dmg *= 2;

        processDamage(dmg, e.clientX, e.clientY);
    }

    function fireJusticeBullet(x, y) {
        const b = document.createElement('div');
        b.className = 'bullet';
        b.style.left = x + 'px';
        b.style.top = y + 'px';
        document.body.appendChild(b);
        b.animate([{ top: y + 'px' }, { top: '-50px' }], 400).onfinish = () => {
            b.remove();
            processDamage(state.lv * 4, x, 100);
        };
    }

    function processDamage(d, x, y) {
        if (d < 1) d = 1;
        state.mHp -= d;
        drawPopup(Math.floor(d), x, y);
        if (state.mHp <= 0) doDeath();
        updateUI();
    }

    function doDeath() {
        state.isShattering = true;
        document.getElementById('soul').style.opacity = 0;
        const reg = DB.regions[state.regionIdx];

        // Soul Shard Particles
        for(let i=0; i<10; i++) {
            const s = document.createElement('div');
            s.className = 'shard';
            s.style.left = (window.innerWidth/2 + 200) + 'px';
            s.style.top = '350px';
            document.body.appendChild(s);
            s.animate([
                { transform: 'translate(0,0)' },
                { transform: `translate(${(Math.random()-0.5)*400}px, 600px) rotate(720deg)` }
            ], 1200).onfinish = () => s.remove();
        }

        // Rewards Logic
        if (state.mIsBoss) {
            state.gold += reg.b.g;
            state.exp += reg.b.e;
            state.kills = 0;
            if (reg.b.isSans) {
                document.getElementById('btn-reset').style.display = 'block';
            } else {
                state.regionIdx++;
            }
        } else {
            state.gold += 10 + (state.regionIdx * 10);
            state.exp += 20 + (state.regionIdx * 15);
            state.kills++;
        }
        
        levelUpCheck();
        setTimeout(spawn, 1000);
    }

    function levelUpCheck() {
        let req = state.lv * 150;
        if (state.exp >= req && state.lv < 20) {
            state.lv++;
            renderAll();
        }
    }

    function processAllyAttacks() {
        if (state.isShattering || state.mHp <= 0) return;
        const sBox = document.getElementById('soul-container').getBoundingClientRect();
        const tx = sBox.left + 100, ty = sBox.top + 100;

        state.allies.forEach(id => {
            let mult = state.skills[id] || 1;
            if (id === 'flowey') animAllyAtk('white', '•', tx, ty, state.lv * mult);
            if (id === 'toriel') animAllyAtk('orange', '🔥', tx, ty, state.lv * 5 * mult);
            if (id === 'sans') animAllyAtk('lightblue', '💀', tx, ty, state.lv * 60 * mult);
            if (id === 'chara') animAllyAtk('red', '🔪', tx, ty, state.lv * 150 * mult);
            if (id === 'undyne') animAllyAtk('cyan', '↑', tx, ty, state.lv * 15 * mult);
        });
    }

    function animAllyAtk(color, sym, tx, ty, d) {
        const p = document.createElement('div');
        p.className = 'proj'; p.innerText = sym; p.style.color = color;
        p.style.left = (Math.random() * 1100) + 'px'; p.style.top = '-50px';
        document.body.appendChild(p);
        p.animate([{ top: '-50px' }, { top: ty+'px', left: tx+'px' }], 600).onfinish = () => {
            p.remove(); processDamage(d, tx, ty);
        };
    }

    /**
     * UI RENDERING LOGIC
     */
    function tab(t) {
        state.currentTab = t;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.innerText.toLowerCase().includes(t)));
        renderTab();
    }

    function renderTab() {
        const cont = document.getElementById('tab-content');
        cont.innerHTML = '';

        if (state.currentTab === 'recruits') {
            DB.recruits.forEach(r => {
                const owned = state.allies.includes(r.id);
                const rReq = r.r ? state.resets >= r.r : true;
                cont.innerHTML += `
                    <div class="item-card">
                        <div><b>${r.n}</b><small>${r.d}</small></div>
                        <button class="btn-buy" ${ (owned || state.gold < r.c || state.lv < r.lv || !rReq) ? 'disabled' : ''} onclick="buyAlly('${r.id}', ${r.c})">
                            ${owned ? 'RECRUITED' : (rReq ? r.c + 'G' : 'RESET REQ')}
                        </button>
                    </div>`;
            });
        } else if (state.currentTab === 'skills') {
            if (!state.allies.length) { cont.innerHTML = "<div style='grid-column: 1/3; text-align:center'>No allies recruited to upgrade.</div>"; return; }
            state.allies.forEach(id => {
                const lv = state.skills[id] || 1;
                const cost = Math.floor(lv * 300);
                cont.innerHTML += `
                    <div class="item-card">
                        <div><b>${id.toUpperCase()} Mastery</b><small>Current Level ${lv}</small></div>
                        <button class="btn-buy" ${state.gold < cost ? 'disabled' : ''} onclick="buySkill('${id}', ${cost})">
                            UPGRADE (${cost}G)
                        </button>
                    </div>`;
            });
        } else if (state.currentTab === 'weapons') {
            DB.weapons.forEach(w => {
                const eq = state.weapon === w.id;
                const rReq = w.r ? state.resets >= w.r : true;
                cont.innerHTML += `
                    <div class="item-card">
                        <div><b>${w.n}</b><small>ATK +${w.a}</small></div>
                        <button class="btn-buy" ${(eq || state.gold < w.c || !rReq) ? 'disabled' : ''} onclick="buyWeapon('${w.id}', ${w.c})">
                            ${eq ? 'EQUIPPED' : (rReq ? w.c + 'G' : 'RESET REQ')}
                        </button>
                    </div>`;
            });
        }
    }

    function buyAlly(id, c) { state.gold -= c; state.allies.push(id); state.skills[id] = 1; renderAll(); }
    function buySkill(id, c) { state.gold -= c; state.skills[id]++; renderAll(); }
    function buyWeapon(id, c) { state.gold -= c; state.weapon = id; renderAll(); }

    function updateUI() {
        document.getElementById('ui-area').innerText = DB.regions[state.regionIdx].n;
        document.getElementById('ui-lv').innerText = state.lv;
        document.getElementById('ui-exp').innerText = `${state.exp} / ${state.lv * 150}`;
        document.getElementById('ui-gold').innerText = Math.floor(state.gold);
        document.getElementById('ui-resets').innerText = state.resets;
        document.getElementById('m-name').innerText = state.mName;
        
        const hpPerc = (state.mHp / state.mMaxHp) * 100;
        document.getElementById('hp-fill').style.width = Math.max(0, hpPerc) + '%';
        document.getElementById('hp-txt').innerText = `${Math.ceil(state.mHp)} / ${state.mMaxHp}`;

        if (DB.regions[state.regionIdx].b.isSans) {
            document.getElementById('stam-fill').style.width = state.sansStam + '%';
        }
    }

    function renderAll() { updateUI(); renderTab(); }
    
    function drawPopup(t, x, y) {
        const p = document.createElement('div'); p.className='dmg-num'; p.innerText=t; p.style.left=x+'px'; p.style.top=y+'px';
        document.body.appendChild(p); setTimeout(()=>p.remove(), 700);
    }

    function doReset() {
        if (!confirm("Erase this world and restart?")) return;
        state.resets++; state.lv = 1; state.exp = 0; state.gold = 0; state.regionIdx = 0; state.kills = 0;
        state.allies = []; state.skills = {}; state.weapon = 'stick'; state.canSave = true;
        document.getElementById('btn-save').disabled = false;
        document.getElementById('no-save-warn').style.display = 'none';
        document.getElementById('btn-reset').style.display = 'none';
        spawn(); renderAll(); saveGame();
    }

    function saveGame() { if(state.canSave) localStorage.setItem('ut_absolute_save_v1', JSON.stringify(state)); }
    function loadGame() {
        const s = localStorage.getItem('ut_absolute_save_v1');
        if (s) state = Object.assign(state, JSON.parse(s));
    }

    init();
</script>
</body>
</html>
