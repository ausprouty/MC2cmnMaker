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
                        <div class="chapter_number ltr"><h1>39.</h1></div>
                        <div class="chapter_title ltr"><h1>领袖的退修与评估</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可7:36-37</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">36&nbsp;</sup>耶稣嘱咐他们不要告诉人，但他越发嘱咐，他们越发传扬开了。<sup class="versenum">37&nbsp;</sup>众人分外稀奇，说：&ldquo;他所做的事都好，他连聋子也叫他们听见，哑巴也叫他们说话！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣选召我们并非一人独处，乃是将我们众人召聚在一起。我们每日面临许多不同挑战，需要有人在旁扶持、督责和鼓励一起顺服神。而在小组中一同跟随耶稣是最好的方式，并且让我们可以发挥神所赐的恩赐，学习效法和操练基督的生命，彼此成全，建立基督的身体。因此我们需要彼此劝勉，不可停止聚会，并在小组中，用爱心彼此包容接纳，彼此配搭，勉励行善，荣耀基督。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2"><span><span><span lang="ZH-CN">耶稣在外邦地区广行医治，外邦人惊叹祂神奇的能力，作者马太如此描述&ldquo;他们就归荣耀给以色列的上帝&rdquo;。在众多的外邦人中，有一位迦南的妇人特别得到耶稣的称赞，因为她表现出美好的信心，当这些外邦人对耶稣做出正面的响应时，法利赛人仍旧是睁眼的瞎子。之前不久，在食物洁净的争辩中被耶稣痛责的法利赛人再度卷土重来，这次他们心怀恶念地要求耶稣行一个大神迹，耶稣却谴责他们无法分辨正发生在他们这个时代的神迹；法利赛人存心拒绝神的启示给了耶稣一个教育门徒的机会，这些不久前才亲身经历过两个大神迹的门徒却依旧信心迟钝，耶稣以法利赛人为前车之鉴，警告门徒不要落入像法利赛人一般的光景，因心存不信，至终无法认出耶稣真正的身分</span><span lang="ZH-CN"><span>（<span class="popup-link" @click = "popUp('pop2')"> 太16:1-12</span></span></span></span></span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">。</span><span><span><span lang="ZH-CN"><span> </span></span></span></span></p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<h3>求主显神迹</h3>

<p><sup class="versenum">1 </sup>法利赛人和撒都该人来试探耶稣，请他从天上显个神迹给他们看。<sup class="versenum">2&nbsp;</sup>耶稣回答说：&ldquo;晚上天发红，你们就说&lsquo;天必要晴&rsquo;；<sup class="versenum">3&nbsp;</sup>早晨天发红，又发黑，你们就说&lsquo;今日必有风雨&rsquo;。你们知道分辨天上的气色，倒不能分辨这时候的神迹！<sup class="versenum">4&nbsp;</sup>一个邪恶淫乱的世代求神迹，除了<u class="person underline">约拿</u>的神迹以外，再没有神迹给他看。&rdquo;耶稣就离开他们去了。</p>

<p><sup class="versenum">5&nbsp;</sup>门徒渡到那边去，忘了带饼。<sup class="versenum">6&nbsp;</sup>耶稣对他们说：&ldquo;你们要谨慎，防备法利赛人和撒都该人的酵。&rdquo;<sup class="versenum">7&nbsp;</sup>门徒彼此议论说：&ldquo;这是因为我们没有带饼吧！&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣看出来，就说：&ldquo;你们这小信的人，为什么因为没有饼彼此议论呢？<sup class="versenum">9&nbsp;</sup>你们还不明白吗？不记得那五个饼分给五千人，又收拾了多少篮子的零碎吗？<sup class="versenum">10&nbsp;</sup>也不记得那七个饼分给四千人，又收拾了多少筐子的零碎吗？<sup class="versenum">11&nbsp;</sup>我对你们说要防备法利赛人和撒都该人的酵，这话不是指着饼说的，你们怎么不明白呢？&rdquo;<sup class="versenum">12&nbsp;</sup>门徒这才晓得他说的不是叫他们防备饼的酵，乃是防备法利赛人和撒都该人的教训。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音16:13-28》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音16:13-28</button><div class="collapsed" id ="Text0">

<p><sup>13</sup>耶稣到了凯撒利亚腓立比的境内，就问门徒说：&ldquo;人说我人子是谁（注：有古卷无&ldquo;我&rdquo;字）？&rdquo;<sup>14</sup>他们说：&ldquo;有人说是施洗的约翰，有人说是以利亚，又有人说是耶利米或是先知里的一位。&rdquo;<sup>15</sup>耶稣说：&ldquo;你们说我是谁？&rdquo;<sup>16</sup>西门彼得回答说：&ldquo;你是基督，是永生　神的儿子。&rdquo;</p>

<p><sup>17</sup>耶稣对他说：&ldquo;西门巴约拿，你是有福的！因为这不是属血肉的指示你的，乃是我在天上的父指示的。<sup>18</sup>我还告诉你：你是彼得，我要把我的教会建造在这盘石上，阴间的权柄不能胜过他（注：&ldquo;权柄&rdquo;原文作&ldquo;门&rdquo;）。<sup>19</sup>我要把天国的钥匙给你，凡你在地上所捆绑的，在天上也要捆绑；凡你在地上所释放的，在天上也要释放。&rdquo;<sup>20</sup>当下，耶稣嘱咐门徒，不可对人说他是基督。</p>

<p><sup>21</sup>从此，耶稣才指示门徒，他必须上耶路撒冷去，受长老、祭司长、文士许多的苦，并且被杀，第三日复活。<sup>22</sup>彼得就拉着他，劝他说：&ldquo;主啊，万不可如此！这事必不临到你身上。&rdquo;<sup>23</sup>耶稣转过来，对彼得说：&ldquo;撒但，退我后边去吧！你是绊我脚的，因为你不体贴神的意思，只体贴人的意思。&rdquo;<sup>24</sup>于是，耶稣对门徒说：&ldquo;若有人要跟从我，就当舍己，背起他的十字架来跟从我。<sup>25</sup>因为凡要救自己生命的（注：&ldquo;生命&rdquo;或作&ldquo;灵魂&rdquo;。下同），必丧掉生命；凡为我丧掉生命的，必得着生命。<sup>26</sup>人若赚得全世界，赔上自己的生命，有什么益处呢？人还能拿什么换生命呢？<sup>27</sup>人子要在他父的荣耀里，同着众使者降临；那时候，他要照各人的行为报应各人。<sup>28</sup>我实在告诉你们：站在这里的，有人在没尝死味以前，必看见人子降临在他的国里。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/239.mp4" type="button" class="external-movie">
         观看马太福音16:13-28</button>
    <div class="collapsed"></div>




<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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

<p class="up">耶稣为了使命继续预备领袖，教导他们爱心、谦卑、信心，以及认识权柄。祂带他们往北到另一个非犹太人的异教地。耶稣开始评估（门徒倍增）的事工，问：&ldquo;众人说我是谁？&rdquo;。这问题无关乎数字，它是关乎（门徒倍增）运动中最核心的问题。我们可以每天用这个重要的问题来问自己和别人。在将近三年的公开事工后，耶稣告诉大家自己是弥赛亚，又显神迹证明自己是弥赛亚，但众人还是不认识祂。于是耶稣问十二使徒，想知道他们怎么回答这个问题。彼得替众人回答说：&ldquo;你是基督，是永生上帝的儿子。&rdquo;他们认识对了！但是耶稣提醒他们，这样的认识是天父指示的。我们对耶稣所有的认识都是天父上帝启示的，不是靠着人的才智。这也是耶稣第一次提到祂的&ldquo;教会&rdquo;。祂应许要把教会的根基建造在祂是谁的这个真理盘石上。这个计划祂选择在异教地首次宣布，就如祂当初在耶路撒冷的圣殿所宣布的。想象一下，这时门徒对这个计划的理解会有何等的不同！</p>

<div>
<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-CN">（进深学习：<span class="popup-link" @click = "popUp('pop3')"> 马可福音8:27-38</span></span></span></span>；<span><span><span lang="ZH-CN"> </span></span></span>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<h3>认耶稣为基督</h3>

<p><sup class="versenum">27&nbsp;</sup>耶稣和门徒出去，往恺撒利亚-腓立比的村庄去。在路上问门徒说：&ldquo;人说我是谁？&rdquo;<sup class="versenum">28&nbsp;</sup>他们说：&ldquo;有人说是施洗的<u class="person underline">约翰</u>，有人说是<u class="person underline">以利亚</u>，又有人说是先知里的一位。&rdquo;<sup class="versenum">29&nbsp;</sup>又问他们说：&ldquo;你们说我是谁？&rdquo;<u class="person underline">彼得</u>回答说：&ldquo;你是基督。&rdquo;</p>

<h3>预言受难复活降临</h3>

<p><sup class="versenum">30&nbsp;</sup>耶稣就禁戒他们，不要告诉人。<sup class="versenum">31&nbsp;</sup>从此，他教训他们说：&ldquo;人子必须受许多的苦，被长老、祭司长和文士弃绝，并且被杀，过三天复活。&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣明明地说这话，<u class="person underline">彼得</u>就拉着他，劝他。<sup class="versenum">33&nbsp;</sup>耶稣转过来，看着门徒，就责备<u class="person underline">彼得</u>，说：&ldquo;<u class="person underline">撒旦</u>，退我后边去吧！因为你不体贴神的意思，只体贴人的意思。&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>于是叫众人和门徒来，对他们说：&ldquo;若有人要跟从我，就当舍己，背起他的十字架来跟从我。<sup class="versenum">35&nbsp;</sup>因为凡要救自己生命的，必丧掉生命；凡为我和福音丧掉生命的，必救了生命。<sup class="versenum">36&nbsp;</sup>人就是赚得全世界，赔上自己的生命，有什么益处呢？<sup class="versenum">37&nbsp;</sup>人还能拿什么换生命呢？<sup class="versenum">38&nbsp;</sup>凡在这淫乱罪恶的世代，把我和我的道当做可耻的，人子在他父的荣耀里同圣天使降临的时候，也要把那人当做可耻的。&rdquo;</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> 路加福音9:18-27</span>）

<div class="popup invisible" id="pop4"><!-- begin bible -->
<h3>认耶稣为基督</h3>

<p><sup class="versenum">18&nbsp;</sup>耶稣自己祷告的时候，门徒也同他在那里。耶稣问他们说：&ldquo;众人说我是谁？&rdquo;<sup class="versenum">19&nbsp;</sup>他们说：&ldquo;有人说是施洗的<u class="person underline">约翰</u>，有人说是<u class="person underline">以利亚</u>，还有人说是古时的一个先知又活了。&rdquo;<sup class="versenum">20&nbsp;</sup>耶稣说：&ldquo;你们说我是谁？&rdquo;<u class="person underline">彼得</u>回答说：&ldquo;是神所立的基督。&rdquo;<sup class="versenum">21&nbsp;</sup>耶稣切切地嘱咐他们，不可将这事告诉人。</p>

<h3>预言受难</h3>

<p><sup class="versenum">22&nbsp;</sup>又说：&ldquo;人子必须受许多的苦，被长老、祭司长和文士弃绝，并且被杀，第三日复活。&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>耶稣又对众人说：&ldquo;若有人要跟从我，就当舍己，天天背起他的十字架来跟从我。<sup class="versenum">24&nbsp;</sup>因为凡要救自己生命的，必丧掉生命；凡为我丧掉生命的，必救了生命。<sup class="versenum">25&nbsp;</sup>人若赚得全世界，却丧了自己、赔上自己，有什么益处呢？<sup class="versenum">26&nbsp;</sup>凡把我和我的道当做可耻的，人子在自己的荣耀里，并天父与圣天使的荣耀里降临的时候，也要把那人当做可耻的。<sup class="versenum">27&nbsp;</sup>我实在告诉你们：站在这里的，有人在没尝死味以前，必看见神的国。&rdquo;</p>
<!-- end bible --></div>

</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太16:15-16</p>

<p class="forward bible"><sup>15</sup>耶稣说：&ldquo;你们说我是谁？&rdquo;<sup>16</sup>西门彼得回答说：&ldquo;你是基督，是永生　神的儿子。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣曾经将天国的钥匙交给了彼得，在信仰的传承中，这把天国的钥匙已经托付给每一位基督徒，基督徒传福音、带领人信主会影响到一个人是否能进入天国。当你想到你拥有天国的钥匙，你会不会更积极地去传福音？为什么？</li>
	<li class="forward">在门徒的思想中只有得胜的弥赛亚，而没有受苦的弥赛亚，它带给你的省思是什么？你是否会羡慕那些成功的基督徒？如果成功是上帝的祝福，那么，你怎么解释失败呢？十字架是失败还是成功？</li>
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
	<li class="forward">思想信主这些年来，你对耶稣的认识是什么？祂是谁？祂与你生命有什么关系？祂与世人关系又是什么？如果没有耶稣，这个世界会是怎样？</li>
	<li class="forward">未来一周，与一位你栽培的门徒分享今天所学的内容，并在《福音行动表》选出2位，听听他们对耶稣的看法，并告诉他们耶稣是谁。</li>
	<li class="forward">接下来带领门徒一起主动关心身边的家人亲友，同事同学，也为他们的救恩持续代祷，并主动邀请他们来参加将要筹办的福音聚会。</li>
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

<p>慈爱怜悯世人的天父，祢眷顾祢所造的人，并爱他们到底。天父啊，感谢主耶稣为我们舍命流血，为我们付上罪的刑法。如今世人可以因信祂，罪过得以赦免，成为祢的儿女，有圣灵为凭据，并警醒等候祂的再来。祂是基督，是永生 神的儿子。除祂以外，我们别无拯救！天父啊，我们深愿祢开我们家人亲友的心窍，使他们的心回转，除去他们心中的刚硬与悖逆，让他们看到自己不过是人，需要主耶稣的救赎。求祢坚定我们信靠的心，依靠圣灵的能力勇敢为祢作见证。祷告祈求奉主耶稣的名，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->