<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>32.</h1></div>
                        <div class="chapter_title ltr"><h1>圣灵带领进入欧洲——福音西进</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒16:4-5</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>他们经过各城，把耶路撒冷使徒和长老所定的条规交给门徒遵守。<sup class="versenum">5&nbsp;</sup>于是众教会信心越发坚固，人数天天加增。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">作者路加忠实记下巴拿巴和保罗因马可而引发的激烈争执，虽然结局是分道扬镳，但我们看到神借着这次冲突动工，宣教队伍一分为二，各自完成宣教任务。而卷入冲突的几个人之间在日后也恢复了同工友好的关系，其中我们看到神的旨意和怜悯。因此我们不宜以此做为产生冲突的借口，在基督徒的团体中仍要竭力追求合一，但结局若是无法和解，保罗和巴拿巴的这个事件的确带给我们安慰和希望。在冲突中，我们更要提醒自己，&ldquo;对事不对人&rdquo;，很可能我们有自己不能妥协的理由，但求神给我们仍然有爱心接纳与我们意见不同的人，承认大家都在学习和成长，更像基督！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">第16章记载了保罗带着西拉从东部进入叙利亚、基利家，穿过托罗斯山脉，再回特庇与路司得，带去耶路撒冷使徒和长老的信件，也进一步的教导和劝慰信徒，坚固众教会。在这一次的旅程中，上帝用奇妙的方法，引导保罗的旅程，使福音从亚洲进入欧洲。</p>

<ul class="up">
	<li class="nobreak-final-final">16:7-8节仍然是&ldquo;他们&rdquo;，而第10节变成&ldquo;我们&rdquo;，暗示作者路加加入了这个团队。这是《使徒行传》三个&ldquo;我们&rdquo;段落中的第一个（<span class="popup-link" @click = "popUp('pop2')"> 徒16:10-17</span>；

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup><u class="person underline">保罗</u>既看见这异象，我们随即想要往马其顿去，以为神召我们传福音给那里的人听。</p>

	<h3>吕底亚信主领洗</h3>

	<p><sup class="versenum">11&nbsp;</sup>于是从特罗亚开船，一直行到撒摩特喇，第二天到了尼亚波利。<sup class="versenum">12&nbsp;</sup>从那里来到腓立比，就是马其顿这一方的头一个城，也是罗马的驻防城。我们在这城里住了几天。<sup class="versenum">13&nbsp;</sup>当安息日，我们出城门，到了河边，知道那里有一个祷告的地方，我们就坐下对那聚会的妇女讲道。<sup class="versenum">14&nbsp;</sup>有一个卖紫色布匹的妇人，名叫<u class="person underline">吕底亚</u>，是推雅推喇城的人，素来敬拜神。她听见了，主就开导她的心，叫她留心听<u class="person underline">保罗</u>所讲的话。<sup class="versenum">15&nbsp;</sup>她和她一家既领了洗，便求我们说：&ldquo;你们若以为我是真信主的，请到我家里来住。&rdquo;于是强留我们。</p>

	<p><sup class="versenum">16&nbsp;</sup>后来，我们往那祷告的地方去，有一个使女迎着面来，她被巫鬼所附，用法术叫她主人们大得财利。<sup class="versenum">17&nbsp;</sup>她跟随<u class="person underline">保罗</u>和我们，喊着说：&ldquo;这些人是至高神的仆人，对你们传说救人的道！&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 徒20:5-21:18</span>；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>这些人先走，在特罗亚等候我们。<sup class="versenum">6&nbsp;</sup>过了除酵的日子，我们从腓立比开船，五天到了特罗亚，和他们相会，在那里住了七天。</p>

	<h3>保罗在特罗亚使犹推古复活</h3>

	<p><sup class="versenum">7&nbsp;</sup>七日的第一日，我们聚会掰饼的时候，<u class="person underline">保罗</u>因为要次日起行，就与他们讲论，直讲到半夜。<sup class="versenum">8&nbsp;</sup>我们聚会的那座楼上，有好些灯烛。<sup class="versenum">9&nbsp;</sup>有一个少年人名叫<u class="person underline">犹推古</u>，坐在窗台上，困倦沉睡。<u class="person underline">保罗</u>讲了多时，少年人睡熟了，就从三层楼上掉下去。扶起他来，已经死了。<sup class="versenum">10&nbsp;</sup><u class="person underline">保罗</u>下去，伏在他身上，抱着他说：&ldquo;你们不要发慌，他的灵魂还在身上。&rdquo;<sup class="versenum">11&nbsp;</sup><u class="person underline">保罗</u>又上去，掰饼吃了，谈论许久，直到天亮，这才走了。<sup class="versenum">12&nbsp;</sup>有人把那童子活活地领来，得的安慰不小。</p>

	<p><sup class="versenum">13&nbsp;</sup>我们先上船开往亚朔去，意思要在那里接<u class="person underline">保罗</u>；因为他是这样安排的，他自己打算要步行。<sup class="versenum">14&nbsp;</sup>他既在亚朔与我们相会，我们就接他上船，来到米推利尼。<sup class="versenum">15&nbsp;</sup>从那里开船，次日到了基阿的对面；又次日，在撒摩靠岸；又次日，来到米利都。<sup class="versenum">16&nbsp;</sup>乃因<u class="person underline">保罗</u>早已定意越过以弗所，免得在亚细亚耽延；他急忙前走，巴不得赶五旬节能到耶路撒冷。</p>

	<p><sup class="versenum">17&nbsp;</sup><u class="person underline">保罗</u>从米利都打发人往以弗所去，请教会的长老来。<sup class="versenum">18&nbsp;</sup>他们来了，<u class="person underline">保罗</u>就说：&ldquo;你们知道自从我到亚细亚的日子以来，在你们中间始终为人如何，<sup class="versenum">19&nbsp;</sup>服侍主凡事谦卑，眼中流泪，又因犹太人的谋害经历试炼。<sup class="versenum">20&nbsp;</sup>你们也知道，凡于你们有益的，我没有一样避讳不说的，或在众人面前，或在各人家里，我都教导你们。<sup class="versenum">21&nbsp;</sup>又对犹太人和希腊人证明当向神悔改，信靠我主耶稣基督。<sup class="versenum">22&nbsp;</sup>现在我往耶路撒冷去，心甚迫切，不知道在那里要遇见什么事。<sup class="versenum">23&nbsp;</sup>但知道圣灵在各城里向我指证，说有捆锁与患难等待我。<sup class="versenum">24&nbsp;</sup>我却不以性命为念，也不看为宝贵，只要行完我的路程，成就我从主耶稣所领受的职事，证明神恩惠的福音。</p>

	<h3>谨慎劝勉</h3>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;我素常在你们中间来往，传讲神国的道，如今我晓得，你们以后都不得再见我的面了。<sup class="versenum">26&nbsp;</sup>所以我今日向你们证明，你们中间无论何人死亡，罪不在我身上，<sup class="versenum">27&nbsp;</sup>因为神的旨意我并没有一样避讳不传给你们的。<sup class="versenum">28&nbsp;</sup>圣灵立你们做全群的监督，你们就当为自己谨慎，也为全群谨慎，牧养神的教会，就是他用自己血所买来的。<sup class="versenum">29&nbsp;</sup>我知道我去之后，必有凶暴的豺狼进入你们中间，不爱惜羊群。<sup class="versenum">30&nbsp;</sup>就是你们中间也必有人起来，说悖谬的话，要引诱门徒跟从他们。<sup class="versenum">31&nbsp;</sup>所以你们应当警醒，记念我三年之久昼夜不住地流泪劝诫你们各人。<sup class="versenum">32&nbsp;</sup>如今我把你们交托神和他恩惠的道，这道能建立你们，叫你们和一切成圣的人同得基业。<sup class="versenum">33&nbsp;</sup>我未曾贪图一个人的金、银、衣服。<sup class="versenum">34&nbsp;</sup>我这两只手常供给我和同人的需用，这是你们自己知道的。<sup class="versenum">35&nbsp;</sup>我凡事给你们做榜样，叫你们知道应当这样劳苦扶助软弱的人，又当记念主耶稣的话说：&lsquo;施比受更为有福。&rsquo;&rdquo;</p>

	<h3>保罗同众人祷告辞别他们</h3>

	<p><sup class="versenum">36&nbsp;</sup><u class="person underline">保罗</u>说完了这话，就跪下同众人祷告。<sup class="versenum">37&nbsp;</sup>众人痛哭，抱着<u class="person underline">保罗</u>的颈项，和他亲嘴。<sup class="versenum">38&nbsp;</sup>叫他们最伤心的，就是他说&ldquo;以后不能再见我的面&rdquo;那句话。于是送他上船去了。</p>

	<h3>推罗的门徒劝保罗不要上耶路撒冷</h3>

	<p><sup class="versenum">1 </sup>我们离别了众人，就开船一直行到哥士。第二天到了罗底，从那里到帕大喇，<sup class="versenum">2&nbsp;</sup>遇见一只船要往腓尼基去，就上船起行。<sup class="versenum">3&nbsp;</sup>望见塞浦路斯，就从南边行过，往叙利亚去。我们就在推罗上岸，因为船要在那里卸货。<sup class="versenum">4&nbsp;</sup>找着了门徒，就在那里住了七天。他们被圣灵感动，对<u class="person underline">保罗</u>说：&ldquo;不要上耶路撒冷去。&rdquo;<sup class="versenum">5&nbsp;</sup>过了这几天，我们就起身前行，他们众人同妻子儿女送我们到城外。我们都跪在岸上祷告，彼此辞别。<sup class="versenum">6&nbsp;</sup>我们上了船，他们就回家去了。</p>

	<h3>亚迦布预言保罗必被捆绑</h3>

	<p><sup class="versenum">7&nbsp;</sup>我们从推罗行尽了水路，来到多利买，就问那里的弟兄安，和他们同住了一天。<sup class="versenum">8&nbsp;</sup>第二天，我们离开那里，来到恺撒利亚，就进了传福音的<u class="person underline">腓利</u>家里，和他同住。他是那七个执事里的一个。<sup class="versenum">9&nbsp;</sup>他有四个女儿，都是处女，是说预言的。<sup class="versenum">10&nbsp;</sup>我们在那里多住了几天，有一个先知名叫<u class="person underline">亚迦布</u>，从犹太下来，<sup class="versenum">11&nbsp;</sup>到了我们这里，就拿<u class="person underline">保罗</u>的腰带捆上自己的手脚，说：&ldquo;圣灵说：犹太人在耶路撒冷要如此捆绑这腰带的主人，把他交在外邦人手里。&rdquo;<sup class="versenum">12&nbsp;</sup>我们和那本地的人听见这话，都苦劝<u class="person underline">保罗</u>不要上耶路撒冷去。<sup class="versenum">13&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;你们为什么这样痛哭，使我心碎呢？我为主耶稣的名，不但被人捆绑，就是死在耶路撒冷也是愿意的。&rdquo;<sup class="versenum">14&nbsp;</sup><u class="person underline">保罗</u>既不听劝，我们便住了口，只说&ldquo;愿主的旨意成就&rdquo;便了。</p>

	<p><sup class="versenum">15&nbsp;</sup>过了几日，我们收拾行李上耶路撒冷去。<sup class="versenum">16&nbsp;</sup>有恺撒利亚的几个门徒和我们同去，带我们到一个久为门徒的家里，叫我们与他同住。他名叫<u class="person underline">拿孙</u>，是塞浦路斯人。</p>

	<p><sup class="versenum">17&nbsp;</sup>到了耶路撒冷，弟兄们欢欢喜喜地接待我们。<sup class="versenum">18&nbsp;</sup>第二天，<u class="person underline">保罗</u>同我们去见<u class="person underline">雅各</u>，长老们也都在那里。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 徒27:1-28:16</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>保罗坐船往意大利去</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">非斯都</u>既然定规了叫我们坐船往意大利去，便将<u class="person underline">保罗</u>和别的囚犯交给御营里的一个百夫长，名叫<u class="person underline">犹流</u>。<sup class="versenum">2&nbsp;</sup>有一只亚大米田的船要沿着亚细亚一带地方的海边走，我们就上了那船开行，有马其顿的帖撒罗尼迦人<u class="person underline">亚里达古</u>和我们同去。<sup class="versenum">3&nbsp;</sup>第二天，到了西顿，<u class="person underline">犹流</u>宽待<u class="person underline">保罗</u>，准他往朋友那里去，受他们的照应。<sup class="versenum">4&nbsp;</sup>从那里又开船，因为风不顺，就贴着塞浦路斯背风岸行去。<sup class="versenum">5&nbsp;</sup>过了基利家、旁非利亚前面的海，就到了吕家的每拉。<sup class="versenum">6&nbsp;</sup>在那里，百夫长遇见一只亚历山大的船要往意大利去，便叫我们上了那船。<sup class="versenum">7&nbsp;</sup>一连多日，船行得慢，仅仅来到革尼土的对面。因为被风拦阻，就贴着克里特背风岸，从撒摩尼对面行过。<sup class="versenum">8&nbsp;</sup>我们沿岸行走，仅仅来到一个地方，名叫佳澳，离那里不远有拉西亚城。</p>

	<h3>保罗劝众</h3>

	<p><sup class="versenum">9&nbsp;</sup>走的日子多了，已经过了禁食的节期，行船又危险，<u class="person underline">保罗</u>就劝众人说：<sup class="versenum">10&nbsp;</sup>&ldquo;众位，我看这次行船，不但货物和船要受伤损，大遭破坏，连我们的性命也难保。&rdquo;<sup class="versenum">11&nbsp;</sup>但百夫长信从掌船的和船主，不信从<u class="person underline">保罗</u>所说的。<sup class="versenum">12&nbsp;</sup>且因在这海口过冬不便，船上的人就多半说，不如开船离开这地方，或者能到非尼基过冬。非尼基是克里特的一个海口，一面朝东北，一面朝东南。<sup class="versenum">13&nbsp;</sup>这时微微起了南风，他们以为得意，就起了锚，贴近克里特行去。</p>

	<h3>水路的危险</h3>

	<p><sup class="versenum">14&nbsp;</sup>不多几时，狂风从岛上扑下来，那风名叫友拉革罗。<sup class="versenum">15&nbsp;</sup>船被风抓住，敌不住风，我们就任风刮去。<sup class="versenum">16&nbsp;</sup>贴着一个小岛的背风岸奔行，那岛名叫高大，在那里仅仅收住了小船。<sup class="versenum">17&nbsp;</sup>既然把小船拉上来，就用缆索捆绑船底，又恐怕在赛耳底沙滩上搁了浅，就落下篷来，任船飘去。<sup class="versenum">18&nbsp;</sup>我们被风浪逼得甚急，第二天众人就把货物抛在海里。<sup class="versenum">19&nbsp;</sup>到第三天，他们又亲手把船上的器具抛弃了。<sup class="versenum">20&nbsp;</sup>太阳和星辰多日不显露，又有狂风大浪催逼，我们得救的指望就都绝了。</p>

	<h3>安慰众人</h3>

	<p><sup class="versenum">21&nbsp;</sup>众人多日没有吃什么，<u class="person underline">保罗</u>就出来站在他们中间，说：&ldquo;众位，你们本该听我的话不离开克里特，免得遭这样的伤损破坏。<sup class="versenum">22&nbsp;</sup>现在我还劝你们放心，你们的性命一个也不失丧，唯独失丧这船。<sup class="versenum">23&nbsp;</sup>因我所属、所侍奉的神，他的使者昨夜站在我旁边说：<sup class="versenum">24&nbsp;</sup>&lsquo;<u class="person underline">保罗</u>，不要害怕！你必定站在恺撒面前；并且与你同船的人，神都赐给你了。&rsquo;<sup class="versenum">25&nbsp;</sup>所以众位可以放心，我信神他怎样对我说，事情也要怎样成就。<sup class="versenum">26&nbsp;</sup>只是我们必要撞在一个岛上。&rdquo;</p>

	<h3>水手想逃</h3>

	<p><sup class="versenum">27&nbsp;</sup>到了第十四天夜间，船在亚得里亚海飘来飘去，约到半夜，水手以为渐近旱地，<sup class="versenum">28&nbsp;</sup>就探深浅，探得有十二丈；稍往前行，又探深浅，探得有九丈。<sup class="versenum">29&nbsp;</sup>恐怕撞在石头上，就从船尾抛下四个锚，盼望天亮。<sup class="versenum">30&nbsp;</sup>水手想要逃出船去，把小船放在海里，假作要从船头抛锚的样子。<sup class="versenum">31&nbsp;</sup><u class="person underline">保罗</u>对百夫长和兵丁说：&ldquo;这些人若不等在船上，你们必不能得救。&rdquo;<sup class="versenum">32&nbsp;</sup>于是兵丁砍断小船的绳子，由它飘去。<sup class="versenum">33&nbsp;</sup>天渐亮的时候，<u class="person underline">保罗</u>劝众人都吃饭，说：&ldquo;你们悬望忍饿不吃什么，已经十四天了。<sup class="versenum">34&nbsp;</sup>所以我劝你们吃饭，这是关乎你们救命的事，因为你们各人连一根头发也不至于损坏。&rdquo;<sup class="versenum">35&nbsp;</sup><u class="person underline">保罗</u>说了这话，就拿着饼，在众人面前祝谢了神，掰开吃。<sup class="versenum">36&nbsp;</sup>于是他们都放下心，也就吃了。</p>

	<h3>船被大浪损坏</h3>

	<p><sup class="versenum">37&nbsp;</sup>我们在船上的共有二百七十六个人。<sup class="versenum">38&nbsp;</sup>他们吃饱了，就把船上的麦子抛在海里，为要叫船轻一点。<sup class="versenum">39&nbsp;</sup>到了天亮，他们不认识那地方，但见一个海湾有岸可登，就商议能把船拢进去不能。<sup class="versenum">40&nbsp;</sup>于是砍断缆索，弃锚在海里，同时也松开舵绳，拉起头篷，顺着风向岸行去。<sup class="versenum">41&nbsp;</sup>但遇着两水夹流的地方，就把船搁了浅，船头胶住不动，船尾被浪的猛力冲坏。</p>

	<h3>众人得救</h3>

	<p><sup class="versenum">42&nbsp;</sup>兵丁的意思要把囚犯杀了，恐怕有洑水脱逃的。<sup class="versenum">43&nbsp;</sup>但百夫长要救<u class="person underline">保罗</u>，不准他们任意而行，就吩咐会洑水的跳下水去先上岸，<sup class="versenum">44&nbsp;</sup>其余的人可以用板子或船上的零碎东西上岸。这样，众人都得了救，上了岸。</p>

	<h3>土人的接待</h3>

	<p><sup class="versenum">1 </sup>我们既已得救，才知道那岛名叫马耳他。<sup class="versenum">2&nbsp;</sup>土人看待我们有非常的情分，因为当时下雨，天气又冷，就生火接待我们众人。<sup class="versenum">3&nbsp;</sup>那时，<u class="person underline">保罗</u>拾起一捆柴，放在火上，有一条毒蛇因为热了出来，咬住他的手。<sup class="versenum">4&nbsp;</sup>土人看见那毒蛇悬在他手上，就彼此说：&ldquo;这人必是个凶手，虽然从海里救上来，天理还不容他活着。&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">保罗</u>竟把那毒蛇甩在火里，并没有受伤。<sup class="versenum">6&nbsp;</sup>土人想他必要肿起来，或是忽然仆倒死了。看了多时，见他无害，就转念说：&ldquo;他是个神！&rdquo;</p>

	<h3>部百流款待保罗</h3>

	<p><sup class="versenum">7&nbsp;</sup>离那地方不远，有田产是岛长<u class="person underline">部百流</u>的。他接纳我们，尽情款待三日。<sup class="versenum">8&nbsp;</sup>当时，<u class="person underline">部百流</u>的父亲患热病和痢疾躺着。<u class="person underline">保罗</u>进去为他祷告，按手在他身上，治好了他。<sup class="versenum">9&nbsp;</sup>从此，岛上其余的病人也来，得了医治。<sup class="versenum">10&nbsp;</sup>他们又多方地尊敬我们，到了开船的时候，也把我们所需用的送到船上。</p>

	<h3>再行水程</h3>

	<p><sup class="versenum">11&nbsp;</sup>过了三个月，我们上了亚历山大的船往前行。这船以&ldquo;<u class="person underline">宙斯</u>双子&rdquo;为记，是在那海岛过了冬的。<sup class="versenum">12&nbsp;</sup>到了叙拉古，我们停泊三日，<sup class="versenum">13&nbsp;</sup>又从那里绕行，来到利基翁。过了一天，起了南风，第二天就来到部丢利。<sup class="versenum">14&nbsp;</sup>在那里遇见弟兄们，请我们与他们同住了七天。这样，我们来到罗马。<sup class="versenum">15&nbsp;</sup>那里的弟兄们一听见我们的信息，就出来到亚比乌市和三馆地方迎接我们。<u class="person underline">保罗</u>见了他们，就感谢神，放心壮胆。</p>

	<p><sup class="versenum">16&nbsp;</sup>进了罗马城，<u class="person underline">保罗</u>蒙准和一个看守他的兵另住在一处。</p>
	<!-- end bible --></div>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒16:6-15》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒16:6-15</button><div class="collapsed" id ="Text0">

<p><sup>6</sup>圣灵既然禁止他们在亚西亚讲道，他们就经过弗吕家、加拉太一带地方，<sup>7</sup>到了每西亚的边界，他们想要往庇推尼去，耶稣的灵却不许。<sup>8</sup>他们就越过每西亚下到特罗亚去。<sup>9</sup>在夜间有异象现与保罗：有一个马其顿人站着求他说：&ldquo;请你过到马其顿来帮助我们！&rdquo;<sup>10</sup>保罗既看见这异象，我们随即想要往马其顿去，以为 神召我们传福音给那里的人听。</p>

<p><sup>11</sup>于是从特罗亚开船，一直行到撒摩特喇，第二天到了尼亚坡里。<sup>12</sup>从那里来到腓立比，就是马其顿这一方的头一个城，也是罗马的驻防城。我们在这城里住了几天。</p>

<p><sup>13</sup>当安息日，我们出城门，到了河边，知道那里有一个祷告的地方，我们就坐下对那聚会的妇女讲道。<sup>14</sup>有一个卖紫色布疋的妇人，名叫吕底亚，是推雅推喇城的人，素来敬拜　神。她听见了，主就开导她的心，叫她留心听保罗所讲的话。<sup>15</sup>她和她一家既领了洗，便求我们说：&ldquo;你们若以为我是真信主的（注：或作&ldquo;你们若以为我是忠心侍主的&rdquo;），请到我家里来住。&rdquo;于是强留我们。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/332.mp4" type="button" class="external-movie">
         观看徒16:6-15</button>
    <div class="collapsed"></div>



<p class="up">&nbsp;</p>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">保罗原先计划去加拉太西边的亚西亚，但是圣灵对事奉团队另有计划。往西去亚洲及往东北到庇推尼的计划都遭到禁止后，耶稣带领团队到特罗亚去，就是位于现今土耳其西岸的一个城市。保罗向主寻求下一步时，耶稣给了他一个异象。团队的人看见种种的证据：被禁止去亚洲、不被允许去庇推尼、保罗得到的异象，断定主要带领他们去到马其顿。我们可以看到《使徒行传》的作者路加，在特罗亚加入了团队，因为他开始使用&ldquo;我们&rdquo;来作纪录 （<span class="popup-link" @click = "popUp('pop5')"> 徒16:10</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup><u class="person underline">保罗</u>既看见这异象，我们随即想要往马其顿去，以为神召我们传福音给那里的人听。</p>
	<!-- end bible --></div>
	他们来到马其顿的腓立比，该城为重要的经济中心。出乎意料的是，上帝带领他们到一个名叫吕底亚的和平之子那里去，她是从亚西亚来的生意人。她不仅欢迎保罗的团队，接受他们的信息，也带领全家信耶稣。如同在其他的故事中一样，新信徒表达顺服的第一个行动就是受洗。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒16:9</p>

<p class="forward bible">在夜间有异象现与保罗：有一个马其顿人站着求他说：&ldquo;请你过到马其顿来帮助我们！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">马其顿的异象（或呼声），在今日所代表的意义是什么？ 请分享你对此异象的感动？</li>
	<li class="forward">你曾经历过想要做什么事一直被拦阻的情况吗？你现在怎么看这个经历？</li>
</ul>

<p class="forward">或你是如何回应或经历神在生活、家庭、工作或事奉的带领？你学习到什么？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在这里圣灵（耶稣的灵）如何禁止（不许）保罗等人到亚西亚和庇推尼，马其顿人如何出现在保罗的异象中，圣经没有明说，也许是环境的变化，内心圣灵的感动，或是人的合理判断。
	<ul class="forward">
		<li class="forward">但是我们必须了解在传福音的过程中或者是人生道路上确实有神的旨意，有些是直接的，有些是间接的，我们所需要做的就是要象保罗他们一样去顺服神的带领，用信心去接受神完备的智慧和美好的带领。</li>
		<li class="forward">神有时会用关门、开门的方式带领我们明白祂要我们走的路，当我们用信心接受神在我们生命中有最好的安排时，我们就不会以目前的环境和我们个人的喜好被拦阻而抱怨，沮丧。</li>
		<li class="forward">为城市教会联盟或是教会的宣教事工祷告，求神赐教会牧者与同工之间，谦卑寻求神的心意，以基督的心为心，在福音拓展的决策上，有从神来的智慧和圣灵的指引，神国可以扩展到不同的地方。</li>
	</ul>
	</li>
	<li class="forward">这段时间你若在做一些重要的决定，试着寻求从神、圣经和圣灵而来的指引、或是咨询教会的牧者、造就者或属灵长辈的的谏言，并把这些领受和感动都写下，在祷告中继续寻求神的引领和聪明智慧来作决定。另外，你也可以安排时间与你的造就者或属灵同伴分享并彼此代祷。</li>
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p class="forward">知道万人的心之主耶稣基督，我们信靠祢。祢是我们生命的主，爱我们、牧养我们并带领我们。感谢祢的救赎和教导，求祢不断让我们在神国扩展中，更明白祢在地如在天的奥秘，懂得祢创造的法则。感谢祢将千古隐藏的奥秘借耶稣基督显明出来！求圣灵保惠师赐给我们信心和胆量，让我们一切的想法和策略在基督里持定，凡事按天父的心意而行，讨主的欢喜。愿各地教会在福音拓展事上所策划和谋略的都交在恩主的手中，愿主带领和赐福，深愿主的名在全地上得着最大的荣耀。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->