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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>逼迫中大放胆量——勇对挑战</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒3:16</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>我们因信他的名，他的名便叫你们所看见、所认识的这人健壮了。正是他所赐的信心，叫这人在你们众人面前全然好了。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">瘸腿者每天习惯性的等别人一点施舍，上帝透过彼得医治了他。人所要的与神要给的要如何看待呢？这让我们思想，什么是人真实的需要。身体和灵性的医治比金钱更可贵。人表面的需要是金钱或身体的医治，但真正的需要是耶稣基督。现代的人都如同这个瘫子，不知道自己真实的需要是什么，以为自己缺乏的是金钱、事业、家庭等等，不知道自己指望得着的&ldquo;各种好处&rdquo;，最终仍是会消失和毁灭的，并不能真正的救赎自己。求神开世人的心眼，看到并经验唯有基督才是世人真正的救赎、满足和保障。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">瘫子得着医治的神迹引起众人的注意和围观，彼得抓住这个机会，向众人传讲耶稣基督是主和救主的福音信息。彼得信息的重点是将众人的眼目从神迹引向基督自己，以上帝藉先祖的预言及耶稣基督的称号，说明基督的独特身份、使命、启示和祂成就的救赎，并引导人悔改，得着上帝生命的应许。就在使徒和百姓说话的时候，祭司们和守殿官并撒都该人忽然来了。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒4:1-31》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒4:1-31</button><div class="collapsed" id ="Text0">

<p><sup>1</sup> 使徒对百姓说话的时候，祭司们和守殿官并撒都该人忽然来了。<sup>2</sup>因他们教训百姓，本著耶稣，传说死人复活，就很烦恼，<sup>3</sup>于是下手拿住他们。因为天已经晚了，就把他们押到第二天。<sup>4</sup>但听道之人有许多信的，男丁数目约到五千。<sup>5</sup>第二天，官府、长老和文士在耶路撒冷聚会，<sup>6</sup>又有大祭司亚那和该亚法、约翰、亚历山大，并大祭司的亲族都在那里；<sup>7</sup>叫使徒站在当中，就问他们说：&ldquo;你们用甚么能力，奉谁的名做这事呢？&rdquo;</p>

<p><sup>8</sup>那时，彼得被圣灵充满，对他们说：<sup>9</sup>&ldquo;治民的官府和长老啊，倘若今日因为在残疾人身上所行的善事，查问我们他是怎么得了痊愈，<sup>10</sup>你们众人和以色列百姓都当知道，站在你们面前的这人得痊愈，是因你们所钉十字架、　神叫他从死里复活的拿撒勒人耶稣基督的名。<sup>11</sup>他是你们&lsquo;匠人所弃的石头，已成了房角的头块石头。&rsquo;<sup>12</sup>除他以外，别无拯救；因为在天下人间，没有赐下别的名，我们可以靠著得救。&rdquo;</p>

<p><sup>13</sup>他们见彼得、约翰的胆量，又看出他们原是没有学问的小民，就希奇，认明他们是跟过耶稣的。<sup>14</sup>又看见那治好了的人和他们一同站著，就无话可驳。<sup>15</sup>于是吩咐他们从公会出去，就彼此商议说：<sup>16</sup>&ldquo;我们当怎样办这两个人呢？因为他们诚然行了一件明显的神迹，凡住耶路撒冷的人都知道，我们也不能说没有。<sup>17</sup>惟恐这事越发传扬在民间，我们必须恐吓他们，叫他们不再奉这名对人讲论。&rdquo;<sup>18</sup>于是叫了他们来，禁止他们，总不可奉耶稣的名讲论、教训人。</p>

<p><sup>19</sup>彼得、约翰说：&ldquo;听从你们，不听从　神，这在　神面前合理不合理，你们自己酌量吧！<sup>20</sup>我们所看见、所听见的，不能不说。&rdquo;<sup>21</sup>官长为百姓的缘故，想不出法子刑罚他们，又恐吓一番，把他们释放了。这是因众人为所行的奇事，都归荣耀与　神。<sup>22</sup>原来藉著神迹医好的那人有四十多岁了。</p>

<p><sup>23</sup>二人既被释放，就到会友那里去，把祭司长和长老所说的话都告诉他们。<sup>24</sup>他们听见了，就同心合意地高声向　神说：&ldquo;主啊，你是造天、地、海和其中万物的，<sup>25</sup>你曾藉著圣灵托你仆人──我们祖宗大卫的口说：&lsquo;外邦为甚么争闹？万民为甚么谋算虚妄的事？<sup>26</sup>世上的君王一齐起来，臣宰也聚集，要敌挡主，并主的受膏者（注：或作&ldquo;基督&rdquo;）。&rsquo;<sup>27</sup>希律和本丢彼拉多、外邦人和以色列民果然在这城里聚集，要攻打你所膏的圣仆耶稣（注：&ldquo;仆&rdquo;或作&ldquo;子&rdquo;），<sup>28</sup>成就你手和你意旨所预定必有的事。(此包括徒<sup>4</sup>:<sup>28</sup>-<sup>29</sup>) <sup>30</sup>他们恐吓我们，现在求主鉴察。一面叫你仆人大放胆量，讲你的道；一面伸出你的手来医治疾病，并且使神迹奇事因著你圣仆耶稣的名行出来（注：&ldquo;仆&rdquo;或作&ldquo;子&rdquo;）。&rdquo; <sup>31</sup>祷告完了，聚会的地方震动，他们就都被圣灵充满，放胆讲论　神的道。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/307.mp4" type="button" class="external-movie">
         观看徒4:1-31</button>
    <div class="collapsed"></div>



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
	<li class="nobreak-final-final">彼得教导百姓本着耶稣死人复活的道理，引起宗教领袖的不满，因此他们下手拿住彼得和约翰。当众人亲眼见到瘸腿的人得医治，又听了彼得所见证的道，就有两千名男丁，加上妇人和小孩都信了这道。耶稣教导使徒，当他们被交给当权者时，不要思虑当怎样说话，祂应许圣灵会引导他们当说的话（<span class="popup-link" @click = "popUp('pop2')"> 太10:17-20</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们，<sup class="versenum">18&nbsp;</sup>并且你们要为我的缘故被送到诸侯君王面前，对他们和外邦人作见证。<sup class="versenum">19&nbsp;</sup>你们被交的时候，不要思虑怎样说话或说什么话，到那时候必赐给你们当说的话；<sup class="versenum">20&nbsp;</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。</p>
	<!-- end bible --></div>
	即使彼得和约翰都没有受过正规的圣经教育，他们的服事仍大有果效，因为他们曾受过耶稣亲自教导，而且有圣灵的能力在他们身上。这次和当权者之间的冲突虽然可怕，信徒们却勇敢地以祷告回应，祈求在逼迫面前能大放胆量，好叫他们能继续在传道的事工上顺从耶稣。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒4:13-14</p>

<p class="forward bible"><sup>13</sup>他们见彼得、约翰的胆量，又看出他们原是没有学问的小民，就希奇，认明他们是跟过耶稣的。<sup>14</sup>又看见那治好了的人和他们一同站著，就无话可驳。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">彼得他们没有祈求打击敌人，或除去拦阻。敌人恐吓的目的是要拦阻他们继续传讲耶稣。重要的不是除去敌人的恐吓，而是使敌人的恐吓失去功效。所以他们求两件事：</li>
</ul>

<p class="indent2">1) 一是求胆量，在敌人恐吓下，能放胆传主的道。</p>

<p class="indent2">2) 二是求神迹，在敌人拦阻下，能见证复活大能的真实。</p>

<p class="indent2">在你的信仰历程中或你在见证基督时，是否曾遭遇过任何的逼迫和攻击？你是如何勇于挑战和胜过的？彼得他们的反应给你怎样的启发？</p>

<ul class="forward">
	<li class="forward">我们是不是关注自己在社会、传统、服事上既有的权力和地位，胜过对神真理、旨意的顺服？某些事情与真理冲突时，我们选择讨好人还是选择顺服上帝呢？为什么？</li>
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
	<li class="forward">在经文中看到神的道不被任何环境和逼迫捆绑时，对你有何激励？在面对我们国家现有处境，教会当如何信靠神而站立得住？把它写下，下周在小组分享。</li>
	<li class="forward">试想想我们在一个相对不那么自由的环境里跟随神，我们当如何信靠神有创意和智慧发展及使用传扬福音的工具和方法呢？与你的门徒小组一起讨论和分享。</li>
	<li class="forward">因着新冠肺炎肆虐全球，人与人之间的互动多了一些距离，教会线下聚会和小组都大受影响。为教会牧者同工在这网络和数码时代有从神来的智慧，去为主得人和牧养会众祷告。若你对数码有兴趣或有这方面的恩赐，求神借着你成为教会的祝福，并训练更多的弟兄姐妹起来参与服事，为主更好得着这世代。</li>
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

<p class="forward">监察人心并审判的主，我们向祢敞开我们自己，祢知道我们的心为何。我们看到，当权者和祢的仇敌常常用一些外在的逼迫，如审判和恐吓来让基督徒软弱和惧怕，但我们知道，依靠上帝的人，有从圣灵来的勇气和智慧，使我们放胆传讲那又真又活的基督。求主使我们心里的力量刚强起来，让我们时刻定睛仰望在祢和祢话语的大能上，因为离了祢，我们什么也不能作。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->