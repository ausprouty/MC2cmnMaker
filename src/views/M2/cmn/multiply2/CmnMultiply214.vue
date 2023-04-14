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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>真信心</h1></div>
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
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约4:34</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;我的食物就是遵行差我来者的旨意，做成他的工。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>希伯来书10:19-25提醒我们， 神并非呼召我们一人独处，乃是将我们众人召聚在一起。我们每日面临许多挑战，需要他人的鼓励、督责，陪伴并一同顺服上帝。在小组中一同跟随耶稣是最好的方式，因此我们需要彼此劝勉，不可停止聚会，并在爱中彼此相顾，建立基督的身体。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣又回到了之前变水为酒的迦拿，在责备加利利人求神迹的错误之际，耶稣仍然出于怜悯，医治了一个大臣的儿子。<span class="popup-link" @click = "popUp('pop2')"> 约翰福音2:1-4:54</span></p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<h3>耶稣在迦拿变水为酒</h3>

<p><sup class="versenum">1 </sup>第三日，在加利利的迦拿有娶亲的筵席，耶稣的母亲在那里。<sup class="versenum">2&nbsp;</sup>耶稣和他的门徒也被请去赴席。<sup class="versenum">3&nbsp;</sup>酒用尽了，耶稣的母亲对他说：&ldquo;他们没有酒了。&rdquo;<sup class="versenum">4&nbsp;</sup>耶稣说：&ldquo;母亲，我与你有什么相干？我的时候还没有到。&rdquo;<sup class="versenum">5&nbsp;</sup>他母亲对用人说：&ldquo;他告诉你们什么，你们就做什么。&rdquo;<sup class="versenum">6&nbsp;</sup>照犹太人洁净的规矩，有六口石缸摆在那里，每口可以盛两三桶水。<sup class="versenum">7&nbsp;</sup>耶稣对用人说：&ldquo;把缸倒满了水。&rdquo;他们就倒满了，直到缸口。<sup class="versenum">8&nbsp;</sup>耶稣又说：&ldquo;现在可以舀出来，送给管筵席的。&rdquo;他们就送了去。<sup class="versenum">9&nbsp;</sup>管筵席的尝了那水变的酒，并不知道是哪里来的，只有舀水的用人知道。管筵席的便叫新郎来，<sup class="versenum">10&nbsp;</sup>对他说：&ldquo;人都是先摆上好酒，等客喝足了才摆上次的，你倒把好酒留到如今！&rdquo;<sup class="versenum">11&nbsp;</sup>这是耶稣所行的头一件神迹，是在加利利的迦拿行的，显出他的荣耀来，他的门徒就信他了。</p>

<p><sup class="versenum">12&nbsp;</sup>这事以后，耶稣与他的母亲、弟兄和门徒都下迦百农去，在那里住了不多几日。</p>

<h3>洁净圣殿</h3>

<p><sup class="versenum">13&nbsp;</sup>犹太人的逾越节近了，耶稣就上耶路撒冷去。<sup class="versenum">14&nbsp;</sup>看见殿里有卖牛、羊、鸽子的，并有兑换银钱的人坐在那里，<sup class="versenum">15&nbsp;</sup>耶稣就拿绳子做成鞭子，把牛羊都赶出殿去，倒出兑换银钱之人的银钱，推翻他们的桌子，<sup class="versenum">16&nbsp;</sup>又对卖鸽子的说：&ldquo;把这些东西拿去，不要将我父的殿当做买卖的地方！&rdquo;<sup class="versenum">17&nbsp;</sup>他的门徒就想起经上记着说：&ldquo;我为你的殿心里焦急，如同火烧。&rdquo;</p>

<h3>耶稣以殿譬己身</h3>

<p><sup class="versenum">18&nbsp;</sup>因此犹太人问他说：&ldquo;你既做这些事，还显什么神迹给我们看呢？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣回答说：&ldquo;你们拆毁这殿，我三日内要再建立起来。&rdquo;<sup class="versenum">20&nbsp;</sup>犹太人便说：&ldquo;这殿是四十六年才造成的，你三日内就再建立起来吗？&rdquo;<sup class="versenum">21&nbsp;</sup>但耶稣这话是以他的身体为殿。<sup class="versenum">22&nbsp;</sup>所以到他从死里复活以后，门徒就想起他说过这话，便信了圣经和耶稣所说的。</p>

<p><sup class="versenum">23&nbsp;</sup>当耶稣在耶路撒冷过逾越节的时候，有许多人看见他所行的神迹，就信了他的名。<sup class="versenum">24&nbsp;</sup>耶稣却不将自己交托他们，因为他知道万人，<sup class="versenum">25&nbsp;</sup>也用不着谁见证人怎样，因他知道人心里所存的。</p>

<h3>耶稣与尼哥迪慕论重生</h3>

<p><sup class="versenum">1 </sup>有一个法利赛人，名叫<u class="person underline">尼哥迪慕</u>，是犹太人的官。<sup class="versenum">2&nbsp;</sup>这人夜里来见耶稣，说：&ldquo;拉比，我们知道你是由神那里来做师傅的，因为你所行的神迹，若没有神同在，无人能行。&rdquo;<sup class="versenum">3&nbsp;</sup>耶稣回答说：&ldquo;我实实在在地告诉你：人若不重生，就不能见神的国。&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">尼哥迪慕</u>说：&ldquo;人已经老了，如何能重生呢？岂能再进母腹生出来吗？&rdquo;<sup class="versenum">5&nbsp;</sup>耶稣说：&ldquo;我实实在在地告诉你：人若不是从水和圣灵生的，就不能进神的国。<sup class="versenum">6&nbsp;</sup>从肉身生的就是肉身，从灵生的就是灵。<sup class="versenum">7&nbsp;</sup>我说你们必须重生，你不要以为稀奇。<sup class="versenum">8&nbsp;</sup>风随着意思吹，你听见风的响声，却不晓得从哪里来，往哪里去。凡从圣灵生的，也是如此。&rdquo;<sup class="versenum">9&nbsp;</sup><u class="person underline">尼哥迪慕</u>问他说：&ldquo;怎能有这事呢？&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣回答说：&ldquo;你是以色列人的先生，还不明白这事吗？<sup class="versenum">11&nbsp;</sup>我实实在在地告诉你：我们所说的是我们知道的，我们所见证的是我们见过的，你们却不领受我们的见证。<sup class="versenum">12&nbsp;</sup>我对你们说地上的事，你们尚且不信，若说天上的事，如何能信呢？<sup class="versenum">13&nbsp;</sup>除了从天降下仍旧在天的人子，没有人升过天。<sup class="versenum">14&nbsp;</sup><u class="person underline">摩西</u>在旷野怎样举蛇，人子也必照样被举起来，<sup class="versenum">15&nbsp;</sup>叫一切信他的都得永生。</p>

<h3>神爱世人</h3>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;神爱世人，甚至将他的独生子赐给他们，叫一切信他的不致灭亡，反得永生。<sup class="versenum">17&nbsp;</sup>因为神差他的儿子降世，不是要定世人的罪，乃是要叫世人因他得救。<sup class="versenum">18&nbsp;</sup>信他的人不被定罪，不信的人罪已经定了，因为他不信神独生子的名。</p>

<h3>作恶的恨光</h3>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;光来到世间，世人因自己的行为是恶的，不爱光倒爱黑暗，定他们的罪就是在此。<sup class="versenum">20&nbsp;</sup>凡作恶的便恨光，并不来就光，恐怕他的行为受责备；<sup class="versenum">21&nbsp;</sup>但行真理的必来就光，要显明他所行的是靠神而行。&rdquo;</p>

<h3>耶稣和约翰施洗</h3>

<p><sup class="versenum">22&nbsp;</sup>这事以后，耶稣和门徒到了犹太地，在那里居住，施洗。<sup class="versenum">23&nbsp;</sup><u class="person underline">约翰</u>在靠近撒冷的哀嫩也施洗，因为那里水多，众人都去受洗。<sup class="versenum">24&nbsp;</sup>那时<u class="person underline">约翰</u>还没有下在监里。<sup class="versenum">25&nbsp;</sup><u class="person underline">约翰</u>的门徒和一个犹太人辩论洁净的礼，<sup class="versenum">26&nbsp;</sup>就来见<u class="person underline">约翰</u>，说：&ldquo;拉比，从前同你在约旦河外、你所见证的那位，现在施洗，众人都往他那里去了。&rdquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">约翰</u>说：&ldquo;若不是从天上赐的，人就不能得什么。<sup class="versenum">28&nbsp;</sup>我曾说我不是基督，是奉差遣在他前面的，你们自己可以给我作见证。<sup class="versenum">29&nbsp;</sup>娶新妇的就是新郎，新郎的朋友站着，听见新郎的声音就甚喜乐。故此，我这喜乐满足了。<sup class="versenum">30&nbsp;</sup>他必兴旺，我必衰微。&rdquo;</p>

<h3>信者能得永生</h3>

<p><sup class="versenum">31&nbsp;</sup>从天上来的是在万有之上，从地上来的是属乎地，他所说的也是属乎地。从天上来的是在万有之上，<sup class="versenum">32&nbsp;</sup>他将所见所闻的见证出来，只是没有人领受他的见证。<sup class="versenum">33&nbsp;</sup>那领受他见证的，就印上印，证明神是真的。<sup class="versenum">34&nbsp;</sup>神所差来的就说神的话，因为神赐圣灵给他是没有限量的。<sup class="versenum">35&nbsp;</sup>父爱子，已将万有交在他手里。<sup class="versenum">36&nbsp;</sup>信子的人有永生，不信子的人得不着永生，神的震怒常在他身上。</p>

<h3>耶稣与撒马利亚妇人谈道</h3>

<p><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。<sup class="versenum">4&nbsp;</sup>必须经过撒马利亚，<sup class="versenum">5&nbsp;</sup>于是到了撒马利亚的一座城，名叫叙加，靠近<u class="person underline">雅各</u>给他儿子<u class="person underline">约瑟</u>的那块地。<sup class="versenum">6&nbsp;</sup>在那里有雅各井。耶稣因走路困乏，就坐在井旁。那时约有午正。<sup class="versenum">7&nbsp;</sup>有一个撒马利亚的妇人来打水，耶稣对她说：&ldquo;请你给我水喝。&rdquo;<sup class="versenum">8&nbsp;</sup>那时门徒进城买食物去了。<sup class="versenum">9&nbsp;</sup>撒马利亚的妇人对他说：&ldquo;你既是犹太人，怎么向我一个撒马利亚妇人要水喝呢？&rdquo;（原来犹太人和撒马利亚人没有来往。）<sup class="versenum">10&nbsp;</sup>耶稣回答说：&ldquo;你若知道神的恩赐和对你说&lsquo;给我水喝&rsquo;的是谁，你必早求他，他也必早给了你活水。&rdquo;<sup class="versenum">11&nbsp;</sup>妇人说：&ldquo;先生，没有打水的器具，井又深，你从哪里得活水呢？<sup class="versenum">12&nbsp;</sup>我们的祖宗<u class="person underline">雅各</u>将这井留给我们，他自己和儿子并牲畜也都喝这井里的水，难道你比他还大吗？&rdquo;</p>

<h3>喝主所赐之水永远不渴</h3>

<p><sup class="versenum">13&nbsp;</sup>耶稣回答说：&ldquo;凡喝这水的，还要再渴，<sup class="versenum">14&nbsp;</sup>人若喝我所赐的水，就永远不渴。我所赐的水要在他里头成为泉源，直涌到永生。&rdquo;<sup class="versenum">15&nbsp;</sup>妇人说：&ldquo;先生，请把这水赐给我，叫我不渴，也不用来这么远打水。&rdquo;<sup class="versenum">16&nbsp;</sup>耶稣说：&ldquo;你去叫你丈夫也到这里来。&rdquo;<sup class="versenum">17&nbsp;</sup>妇人说：&ldquo;我没有丈夫。&rdquo;耶稣说：&ldquo;你说没有丈夫是不错的。<sup class="versenum">18&nbsp;</sup>你已经有五个丈夫，你现在有的并不是你的丈夫。你这话是真的。&rdquo;<sup class="versenum">19&nbsp;</sup>妇人说：&ldquo;先生，我看出你是先知。<sup class="versenum">20&nbsp;</sup>我们的祖宗在这山上礼拜，你们倒说，应当礼拜的地方是在耶路撒冷。&rdquo;</p>

<h3>须用心灵诚实拜父</h3>

<p><sup class="versenum">21&nbsp;</sup>耶稣说：&ldquo;妇人，你当信我。时候将到，你们拜父也不在这山上，也不在耶路撒冷。<sup class="versenum">22&nbsp;</sup>你们所拜的你们不知道，我们所拜的我们知道，因为救恩是从犹太人出来的。<sup class="versenum">23&nbsp;</sup>时候将到，如今就是了，那真正拜父的，要用心灵和诚实拜他，因为父要这样的人拜他。<sup class="versenum">24&nbsp;</sup>神是个灵，所以拜他的必须用心灵和诚实拜他。&rdquo;<sup class="versenum">25&nbsp;</sup>妇人说：&ldquo;我知道弥赛亚，就是那称为基督的要来，他来了，必将一切的事都告诉我们。&rdquo;<sup class="versenum">26&nbsp;</sup>耶稣说：&ldquo;这和你说话的就是他。&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>当下门徒回来，就稀奇耶稣和一个妇人说话，只是没有人说&ldquo;你是要什么？&rdquo;，或说&ldquo;你为什么和她说话？&rdquo;。<sup class="versenum">28&nbsp;</sup>那妇人就留下水罐子，往城里去，对众人说：<sup class="versenum">29&nbsp;</sup>&ldquo;你们来看！有一个人将我素来所行的一切事都给我说出来了，莫非这就是基督吗？&rdquo;<sup class="versenum">30&nbsp;</sup>众人就出城，往耶稣那里去。</p>

<h3>耶稣以遵行父意为食物</h3>

<p><sup class="versenum">31&nbsp;</sup>这其间，门徒对耶稣说：&ldquo;拉比，请吃。&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣说：&ldquo;我有食物吃，是你们不知道的。&rdquo;<sup class="versenum">33&nbsp;</sup>门徒就彼此对问说：&ldquo;莫非有人拿什么给他吃吗？&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;我的食物就是遵行差我来者的旨意，做成他的工。<sup class="versenum">35&nbsp;</sup>你们岂不说，到收割的时候还有四个月吗？我告诉你们：举目向田观看！庄稼已经熟了，可以收割了。<sup class="versenum">36&nbsp;</sup>收割的人得工价，积蓄五谷到永生，叫撒种的和收割的一同快乐。<sup class="versenum">37&nbsp;</sup>俗语说：&lsquo;那人撒种，这人收割。&rsquo;这话可见是真的。<sup class="versenum">38&nbsp;</sup>我差你们去收你们所没有劳苦的，别人劳苦，你们享受他们所劳苦的。&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>那城里有好些撒马利亚人信了耶稣，因为那妇人作见证说：&ldquo;他将我素来所行的一切事都给我说出来了。&rdquo;<sup class="versenum">40&nbsp;</sup>于是撒马利亚人来见耶稣，求他在他们那里住下，他便在那里住了两天。<sup class="versenum">41&nbsp;</sup>因耶稣的话，信的人就更多了，<sup class="versenum">42&nbsp;</sup>便对妇人说：&ldquo;现在我们信，不是因为你的话，是我们亲自听见了，知道这真是救世主。&rdquo;</p>

<h3>耶稣在本地无人尊敬</h3>

<p><sup class="versenum">43&nbsp;</sup>过了那两天，耶稣离了那地方，往加利利去。<sup class="versenum">44&nbsp;</sup>因为耶稣自己作过见证说，先知在本地是没有人尊敬的。<sup class="versenum">45&nbsp;</sup>到了加利利，加利利人既然看见他在耶路撒冷过节所行的一切事，就接待他，因为他们也是上去过节。</p>

<p><sup class="versenum">46&nbsp;</sup>耶稣又到了加利利的迦拿，就是他从前变水为酒的地方。有一个大臣，他的儿子在迦百农患病。<sup class="versenum">47&nbsp;</sup>他听见耶稣从犹太到了加利利，就来见他，求他下去医治他的儿子，因为他儿子快要死了。<sup class="versenum">48&nbsp;</sup>耶稣就对他说：&ldquo;若不看见神迹奇事，你们总是不信！&rdquo;<sup class="versenum">49&nbsp;</sup>那大臣说：&ldquo;先生，求你趁着我的孩子还没有死就下去。&rdquo;<sup class="versenum">50&nbsp;</sup>耶稣对他说：&ldquo;回去吧，你的儿子活了！&rdquo;那人信耶稣所说的话就回去了。<sup class="versenum">51&nbsp;</sup>正下去的时候，他的仆人迎见他，说他的儿子活了。<sup class="versenum">52&nbsp;</sup>他就问什么时候见好的，他们说：&ldquo;昨日未时热就退了。&rdquo;<sup class="versenum">53&nbsp;</sup>他便知道这正是耶稣对他说&ldquo;你儿子活了&rdquo;的时候，他自己和全家就都信了。<sup class="versenum">54&nbsp;</sup>这是耶稣在加利利行的第二件神迹，是他从犹太回去以后行的。</p>
<!-- end bible --></div>

<p>自成一个自迦拿至迦拿、首尾呼应的单元，至此告一段落，在这个单元中陆续发生的事件贯穿成一个共同的主题，就是&ldquo;旧事已过，一切都变成新的了&rdquo;，因为神的儿子已经来到世界上，耶稣会赐下生命的活水给凡是相信祂的人。&nbsp;</p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音4:43-54》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音4:43-54</button><div class="collapsed" id ="Text0">

<p><sup>43</sup> 过了那两天，耶稣离了那地方，往加利利去。<sup>44</sup>因为耶稣自己作过见证说：&ldquo;先知在本地是没有人尊敬的。&rdquo;<sup>45</sup>到了加利利，加利利人既然看见他在耶路撒冷过节所行的一切事，就接待他，因为他们也是上去过节。<sup>46</sup>耶稣又到了加利利的迦拿，就是他从前变水为酒的地方。有一个大臣，他的儿子在迦百农患病。<sup>47</sup>他听见耶稣从犹太到了加利利，就来见他，求他下去医治他的儿子，因为他儿子快要死了。<sup>48</sup>耶稣就对他说：&ldquo;若不看见神迹奇事，你们总是不信。&rdquo;<sup>49</sup>那大臣说：&ldquo;先生，求你趁着我的孩子还没有死就下去。&rdquo;<sup>50</sup>耶稣对他说：&ldquo;回去吧！你的儿子活了。&rdquo;那人信耶稣所说的话，就回去了。</p>

<p><sup>51</sup>正下去的时候，他的仆人迎见他，说他的儿子活了。<sup>52</sup>他就问什么时候见好的。他们说：&ldquo;昨日未时热就退了。&rdquo;<sup>53</sup>他便知道这正是耶稣对他说&ldquo;你儿子活了&rdquo;的时候；他自己和全家就都信了。<sup>54</sup>这是耶稣在加利利行的第二件神迹，是他从犹太回去以后行的。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/214.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音4:43-54&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
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
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣往北到加利利的拿撒勒，也就是祂的家乡。众人都对祂好奇，因为祂在圣殿里大发雷霆的事传到了这里。耶稣又回到迦拿消息传到迦百农城里一位情急的大臣耳中。这位大臣很可能是一位罗马人，盼望耶稣能医好他的小孩。虽然在这之前，耶稣似乎还未开始医治病人，但他还是对耶稣有信心。当耶稣说他的孩子得医治时，大臣相信且遵从了耶稣的话。最后他的儿子病真的好了，全家人也都相信得救了。信心，就是对耶稣所说的话当真，去相信祂，并且以行动顺服祂。</p>

<ul>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop3')"> 马太福音4:17</span>；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>从那时候，耶稣就传起道来，说：&ldquo;天国近了，你们应当悔改！&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 马可福音1:14-15</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">约翰</u>下监以后，耶稣来到加利利，宣传神的福音，<sup class="versenum">15&nbsp;</sup>说：&ldquo;日期满了，神的国近了！你们当悔改，信福音！&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 路加福音4:14-15</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>耶稣满有圣灵的能力，回到加利利，他的名声就传遍了四方。<sup class="versenum">15&nbsp;</sup>他在各会堂里教训人，众人都称赞他。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约4:53-54</p>

<p class="forward bible"><sup>53</sup>他便知道这正是耶稣对他说&ldquo;你儿子活了&rdquo;的时候；他自己和全家就都信了。<sup>54</sup>这是耶稣在加利利行的第二件神迹，是他从犹太回去以后行的。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">在48节耶稣责备的是那些人？从这节经文看出加利利人的信心停留在甚么程度？依靠神迹的信心为什么会受到耶稣责备？神迹最终的目的是什么（参约20:31）？</li>
	<li class="forward">从约翰福音第四章的经文中找出你对耶稣的认识：
	<ul class="forward">
		<li class="forward">祂的身份？</li>
		<li class="forward">祂的使命？</li>
		<li class="forward">祂对世界的影响？</li>
	</ul>
	</li>
	<li class="forward">在小组中一起计划并跟进开放家庭举办福音性聚会的事宜（用什么形式？何时？何地？服事人员的分配）。</li>
</ul>

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
	<li class="forward">在信靠耶稣的事上，你想有哪方面是耶稣会责备你信的不够的？在灵修时间，向主敞开你的心，并求祂用神的话语鼓励和刚强你，而你也将一切交托给祂。</li>
	<li class="forward">接下来主动关心不在身边的家人，也为他们的救恩持续代祷，找机会向他们分享神的作为和奇事。求神也让你看到祂在你亲友中所行奇妙的神迹。</li>
	<li class="forward">复习《天国基础12：为主开放家庭》如何举办福音性聚会内容。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul class="forward">
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

<p>全知全能的天父，祢是医治的神，祢眷顾祢所造的！世人纵然离弃祢，公然反对祢、逼迫祢，但祢不离不弃的爱，一再将人挽回。天父啊，愿祢开我家人亲友的心窍，看到祢才是真神，是使死人复活的神。求祢使他们的心速速回转，除去他们心中的刚硬与悖逆，让他们看到自己不过是人，而且需要祢的拯救。主啊，刚强我的心，使我有能力为祢作见证，灵巧像蛇，驯良像鸽子。祷告祈求奉主耶稣的名，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->