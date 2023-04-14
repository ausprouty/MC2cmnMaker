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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>神所预备的人 </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课的目的，是了解寻找神所预备的人&mdash;&mdash;&ldquo;和平之子&rdquo;的原则，以及&ldquo;和平之子&rdquo;所拥有的特质。我们也将学习借着&ldquo;祷告，关怀与分享&rdquo;（Prayer-Care-Share）来辨认&ldquo;和平之子&rdquo;，他们对建立属灵倍增运动有重要的影响力。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">罗马书11:33-36</p>

<p class="back bible"><sup>33</sup>深哉！神丰富的智慧和知识。他的判断何其难测！祂的踪迹何其难寻！<sup>34</sup>谁知道主的心？谁作过祂的谋士呢？<sup>35</sup>谁是先给了祂，使祂后来偿还呢？<sup>36</sup>因为万有都是本于祂，倚靠祂，归于祂。愿荣耀归给祂，直到永远。阿们！</p>

</div>

<ul class="back">
	<li class="back">现在让我们诵读经文两遍，并按经文轮流开声赞美我们的神！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路18:40-41</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>耶稣站住，吩咐把他领过来。到了跟前，就问他说：<sup class="versenum">41&nbsp;</sup>&ldquo;你要我为你做什么？&rdquo;他说：&ldquo;主啊，我要能看见！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">上帝改变人的生命，使用人来荣耀祂。有一个中东人，名叫阿当，过去被他的宗教训练成随时可以殉道的人。但就在他遇见基督时，他的人生一夜之间改变了。与基督之间的新关系让他兴奋不已，他四处向认识的人作见证。尽管遭受逼迫，他仍继续向人传福音、训练门徒。神今天也要使用我们寻找祂所预备的人，使福音广传。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
	<li class="nobreak-final-final">耶稣呼召四个人撇下所有来跟从他，过&ldquo;得人如鱼&rdquo;的新生活。祂六次向门徒示范，教导他们得人。最后一次则是一个让人意想不到的官员（<span class="popup-link" @click = "popUp('pop8')"> 路加福音5:27-32</span>）
	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>这事以后，耶稣出去，看见一个税吏，名叫<u class="person underline">利未</u>，坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;<sup class="versenum">28&nbsp;</sup>他就撇下所有的，起来跟从了耶稣。<sup class="versenum">29&nbsp;</sup><u class="person underline">利未</u>在自己家里为耶稣大摆筵席，有许多税吏和别人与他们一同坐席。<sup class="versenum">30&nbsp;</sup>法利赛人和文士就向耶稣的门徒发怨言说：&ldquo;你们为什么和税吏并罪人一同吃喝呢？&rdquo;<sup class="versenum">31&nbsp;</sup>耶稣对他们说：&ldquo;无病的人用不着医生，有病的人才用得着。<sup class="versenum">32&nbsp;</sup>我来本不是召义人悔改，乃是召罪人悔改。&rdquo;</p>
	<!-- end bible --></div>
	加入他们的行列，成为耶稣亲近的门徒之一。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音10:1-24》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音10:1-24</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>这事以后，主又设立七十个人，差遣他们两个两个地在他前面，往自己所要到的各城各地方去。<sup class="versenum">2&nbsp;</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主，打发工人出去收他的庄稼。<sup class="versenum">3&nbsp;</sup>你们去吧！我差你们出去，如同羊羔进入狼群。<sup class="versenum">4&nbsp;</sup>不要带钱囊，不要带口袋，不要带鞋，在路上也不要问人的安。<sup class="versenum">5&nbsp;</sup>无论进哪一家，先要说：&lsquo;愿这一家平安！&rsquo;<sup class="versenum">6&nbsp;</sup>那里若有当得平安的人，你们所求的平安就必临到那家；不然，就归于你们了。<sup class="versenum">7&nbsp;</sup>你们要住在那家，吃喝他们所供给的，因为工人得工价是应当的。不要从这家搬到那家。</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;无论进哪一城，人若接待你们，给你们摆上什么，你们就吃什么。<sup class="versenum">9&nbsp;</sup>要医治那城里的病人，对他们说：&lsquo;神的国临近你们了。&rsquo;<sup class="versenum">10&nbsp;</sup>无论进哪一城，人若不接待你们，你们就到街上去，<sup class="versenum">11&nbsp;</sup>说：&lsquo;就是你们城里的尘土粘在我们的脚上，我们也当着你们擦去。虽然如此，你们该知道神的国临近了。&rsquo;<sup class="versenum">12&nbsp;</sup>我告诉你们：当审判的日子，所多玛所受的比那城还容易受呢！<sup class="versenum">13&nbsp;</sup>哥拉汛哪，你有祸了！伯赛大啊，你有祸了！因为在你们中间所行的异能，若行在推罗、西顿，他们早已披麻蒙灰、坐在地上悔改了。<sup class="versenum">14&nbsp;</sup>当审判的日子，推罗、西顿所受的比你们还容易受呢！<sup class="versenum">15&nbsp;</sup>迦百农啊，你已经升到天上，将来必推下阴间！&rdquo;<sup class="versenum">16&nbsp;</sup>又对门徒说：&ldquo;听从你们的，就是听从我；弃绝你们的，就是弃绝我；弃绝我的，就是弃绝那差我来的。&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊，因你的名，就是鬼也服了我们！&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;我曾看见<u class="person underline">撒旦</u>从天上坠落，像闪电一样。<sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊，是的，因为你的美意本是如此。<sup class="versenum">22&nbsp;</sup>一切所有的，都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了！<sup class="versenum">24&nbsp;</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>
<!-- end bible -->

<p></p>

</div>


<button id="MC2/cmn/video/multiply1/109.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音10:1-24&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对耶稣有什么新的认识？</li>
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
<div id="Summary2" class="summary"><ul>
	<li class="up">
	<p><strong>+ 小结</strong></p>
	</li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">耶稣差遣跟随者出去做跟祂一样的事：为人祷告、关怀他人的需要，以及分享天国的事。总结为&ldquo;祷告，关怀与分享&rdquo;（PCS）。 祂以训练、差遣新工人出去的方式，倍增人数。&ldquo;和平之子&rdquo;是神所预备好的人，他们接受你和你所传的信息。透过他们与其他人的关系，将开启新的人际网络，使更多人听见福音。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">路加福音10:2</p>

<p class="forward bible">（主）就对他们说：&ldquo;要收的庄稼多，作工的人少。所以你们当求庄稼的主，打发工人出去收他的庄稼。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><p>+ 认识&ldquo;和平之子&rdquo;的圣经例子</p></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="flush">阅读以下经文或观看视频</p>

<ul class="indent">
	<li class="forward">井边撒玛利亚妇人（<span class="popup-link" @click = "popUp('pop3')"> 约4:1-42</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>耶稣与撒马利亚妇人谈道</h3>

	<p><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。<sup class="versenum">4&nbsp;</sup>必须经过撒马利亚，<sup class="versenum">5&nbsp;</sup>于是到了撒马利亚的一座城，名叫叙加，靠近<u class="person underline">雅各</u>给他儿子<u class="person underline">约瑟</u>的那块地。<sup class="versenum">6&nbsp;</sup>在那里有雅各井。耶稣因走路困乏，就坐在井旁。那时约有午正。<sup class="versenum">7&nbsp;</sup>有一个撒马利亚的妇人来打水，耶稣对她说：&ldquo;请你给我水喝。&rdquo;<sup class="versenum">8&nbsp;</sup>那时门徒进城买食物去了。<sup class="versenum">9&nbsp;</sup>撒马利亚的妇人对他说：&ldquo;你既是犹太人，怎么向我一个撒马利亚妇人要水喝呢？&rdquo;（原来犹太人和撒马利亚人没有来往。）<sup class="versenum">10&nbsp;</sup>耶稣回答说：&ldquo;你若知道神的恩赐和对你说&lsquo;给我水喝&rsquo;的是谁，你必早求他，他也必早给了你活水。&rdquo;<sup class="versenum">11&nbsp;</sup>妇人说：&ldquo;先生，没有打水的器具，井又深，你从哪里得活水呢？<sup class="versenum">12&nbsp;</sup>我们的祖宗<u class="person underline">雅各</u>将这井留给我们，他自己和儿子并牲畜也都喝这井里的水，难道你比他还大吗？&rdquo;</p>

	<h3>喝主所赐之水永远不渴</h3>

	<p><sup class="versenum">13&nbsp;</sup>耶稣回答说：&ldquo;凡喝这水的，还要再渴，<sup class="versenum">14&nbsp;</sup>人若喝我所赐的水，就永远不渴。我所赐的水要在他里头成为泉源，直涌到永生。&rdquo;<sup class="versenum">15&nbsp;</sup>妇人说：&ldquo;先生，请把这水赐给我，叫我不渴，也不用来这么远打水。&rdquo;<sup class="versenum">16&nbsp;</sup>耶稣说：&ldquo;你去叫你丈夫也到这里来。&rdquo;<sup class="versenum">17&nbsp;</sup>妇人说：&ldquo;我没有丈夫。&rdquo;耶稣说：&ldquo;你说没有丈夫是不错的。<sup class="versenum">18&nbsp;</sup>你已经有五个丈夫，你现在有的并不是你的丈夫。你这话是真的。&rdquo;<sup class="versenum">19&nbsp;</sup>妇人说：&ldquo;先生，我看出你是先知。<sup class="versenum">20&nbsp;</sup>我们的祖宗在这山上礼拜，你们倒说，应当礼拜的地方是在耶路撒冷。&rdquo;</p>

	<h3>须用心灵诚实拜父</h3>

	<p><sup class="versenum">21&nbsp;</sup>耶稣说：&ldquo;妇人，你当信我。时候将到，你们拜父也不在这山上，也不在耶路撒冷。<sup class="versenum">22&nbsp;</sup>你们所拜的你们不知道，我们所拜的我们知道，因为救恩是从犹太人出来的。<sup class="versenum">23&nbsp;</sup>时候将到，如今就是了，那真正拜父的，要用心灵和诚实拜他，因为父要这样的人拜他。<sup class="versenum">24&nbsp;</sup>神是个灵，所以拜他的必须用心灵和诚实拜他。&rdquo;<sup class="versenum">25&nbsp;</sup>妇人说：&ldquo;我知道弥赛亚，就是那称为基督的要来，他来了，必将一切的事都告诉我们。&rdquo;<sup class="versenum">26&nbsp;</sup>耶稣说：&ldquo;这和你说话的就是他。&rdquo;</p>

	<p><sup class="versenum">27&nbsp;</sup>当下门徒回来，就稀奇耶稣和一个妇人说话，只是没有人说&ldquo;你是要什么？&rdquo;，或说&ldquo;你为什么和她说话？&rdquo;。<sup class="versenum">28&nbsp;</sup>那妇人就留下水罐子，往城里去，对众人说：<sup class="versenum">29&nbsp;</sup>&ldquo;你们来看！有一个人将我素来所行的一切事都给我说出来了，莫非这就是基督吗？&rdquo;<sup class="versenum">30&nbsp;</sup>众人就出城，往耶稣那里去。</p>

	<p><sup class="versenum">31&nbsp;</sup>这其间，门徒对耶稣说：&ldquo;拉比，请吃。&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣说：&ldquo;我有食物吃，是你们不知道的。&rdquo;<sup class="versenum">33&nbsp;</sup>门徒就彼此对问说：&ldquo;莫非有人拿什么给他吃吗？&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;我的食物就是遵行差我来者的旨意，做成他的工。<sup class="versenum">35&nbsp;</sup>你们岂不说，到收割的时候还有四个月吗？我告诉你们：举目向田观看！庄稼已经熟了，可以收割了。<sup class="versenum">36&nbsp;</sup>收割的人得工价，积蓄五谷到永生，叫撒种的和收割的一同快乐。<sup class="versenum">37&nbsp;</sup>俗语说：&lsquo;那人撒种，这人收割。&rsquo;这话可见是真的。<sup class="versenum">38&nbsp;</sup>我差你们去收你们所没有劳苦的，别人劳苦，你们享受他们所劳苦的。&rdquo;</p>

	<p><sup class="versenum">39&nbsp;</sup>那城里有好些撒马利亚人信了耶稣，因为那妇人作见证说：&ldquo;他将我素来所行的一切事都给我说出来了。&rdquo;<sup class="versenum">40&nbsp;</sup>于是撒马利亚人来见耶稣，求他在他们那里住下，他便在那里住了两天。<sup class="versenum">41&nbsp;</sup>因耶稣的话，信的人就更多了，<sup class="versenum">42&nbsp;</sup>便对妇人说：&ldquo;现在我们信，不是因为你的话，是我们亲自听见了，知道这真是救世主。&rdquo;</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">撒该（<span class="popup-link" @click = "popUp('pop4')"> 路19:1-10</span>）
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣进了耶利哥，正经过的时候，<sup class="versenum">2&nbsp;</sup>有一个人名叫<u class="person underline">撒该</u>，做税吏长，是个财主，<sup class="versenum">3&nbsp;</sup>他要看看耶稣是怎样的人。只因人多，他的身量又矮，所以不得看见。<sup class="versenum">4&nbsp;</sup>就跑到前头，爬上桑树，要看耶稣，因为耶稣必从那里经过。<sup class="versenum">5&nbsp;</sup>耶稣到了那里，抬头一看，对他说：&ldquo;<u class="person underline">撒该</u>，快下来！今天我必住在你家里。&rdquo;<sup class="versenum">6&nbsp;</sup>他就急忙下来，欢欢喜喜地接待耶稣。<sup class="versenum">7&nbsp;</sup>众人看见，都私下议论说：&ldquo;他竟到罪人家里去住宿！&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">撒该</u>站着对主说：&ldquo;主啊，我把所有的一半给穷人，我若讹诈了谁，就还他四倍。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是<u class="person underline">亚伯拉罕</u>的子孙。<sup class="versenum">10&nbsp;</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">被鬼附的人（<span class="popup-link" @click = "popUp('pop5')"> 路8:26-39</span>）
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>他们到了格拉森人的地方，就是加利利的对面。<sup class="versenum">27&nbsp;</sup>耶稣上了岸，就有城里一个被鬼附着的人迎面而来。这个人许久不穿衣服，不住房子，只住在坟茔里。<sup class="versenum">28&nbsp;</sup>他见了耶稣，就俯伏在他面前，大声喊叫说：&ldquo;至高神的儿子耶稣，我与你有什么相干？求你不要叫我受苦！&rdquo;<sup class="versenum">29&nbsp;</sup>是因耶稣曾吩咐污鬼从那人身上出来。原来这鬼屡次抓住他；他常被人看守，又被铁链和脚镣捆锁，他竟把锁链挣断，被鬼赶到旷野去。<sup class="versenum">30&nbsp;</sup>耶稣问他说：&ldquo;你名叫什么？&rdquo;他说：&ldquo;我名叫&lsquo;群&rsquo;。&rdquo;这是因为附着他的鬼多。<sup class="versenum">31&nbsp;</sup>鬼就央求耶稣，不要吩咐他们到无底坑里去。<sup class="versenum">32&nbsp;</sup>那里有一大群猪在山上吃食。鬼央求耶稣准他们进入猪里去，耶稣准了他们。<sup class="versenum">33&nbsp;</sup>鬼就从那人出来，进入猪里去。于是那群猪闯下山崖，投在湖里淹死了。<sup class="versenum">34&nbsp;</sup>放猪的看见这事就逃跑了，去告诉城里和乡下的人。<sup class="versenum">35&nbsp;</sup>众人出来要看是什么事，到了耶稣那里，看见鬼所离开的那人坐在耶稣脚前，穿着衣服，心里明白过来，他们就害怕。<sup class="versenum">36&nbsp;</sup>看见这事的，便将被鬼附着的人怎么得救告诉他们。<sup class="versenum">37&nbsp;</sup>格拉森四围的人因为害怕得很，都求耶稣离开他们，耶稣就上船回去了。<sup class="versenum">38&nbsp;</sup>鬼所离开的那人恳求和耶稣同在，耶稣却打发他回去，说：<sup class="versenum">39&nbsp;</sup>&ldquo;你回家去，传说神为你做了何等大的事。&rdquo;他就去，满城里传扬耶稣为他做了何等大的事。</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">吕底亚（<span class="popup-link" @click = "popUp('pop6')"> 徒16:11-15</span>）
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>于是从特罗亚开船，一直行到撒摩特喇，第二天到了尼亚波利。<sup class="versenum">12&nbsp;</sup>从那里来到腓立比，就是马其顿这一方的头一个城，也是罗马的驻防城。我们在这城里住了几天。<sup class="versenum">13&nbsp;</sup>当安息日，我们出城门，到了河边，知道那里有一个祷告的地方，我们就坐下对那聚会的妇女讲道。<sup class="versenum">14&nbsp;</sup>有一个卖紫色布匹的妇人，名叫<u class="person underline">吕底亚</u>，是推雅推喇城的人，素来敬拜神。她听见了，主就开导她的心，叫她留心听<u class="person underline">保罗</u>所讲的话。<sup class="versenum">15&nbsp;</sup>她和她一家既领了洗，便求我们说：&ldquo;你们若以为我是真信主的，请到我家里来住。&rdquo;于是强留我们。</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">耶孙（<span class="popup-link" @click = "popUp('pop7')"> 徒17:1-9</span>）
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>保罗和西拉在帖撒罗尼迦讲道</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">保罗</u>和<u class="person underline">西拉</u>经过暗妃波里、亚波罗尼亚，来到帖撒罗尼迦，在那里有犹太人的会堂。<sup class="versenum">2&nbsp;</sup><u class="person underline">保罗</u>照他素常的规矩进去，一连三个安息日，本着圣经与他们辩论，<sup class="versenum">3&nbsp;</sup>讲解陈明基督必须受害，从死里复活，又说：&ldquo;我所传于你们的这位耶稣，就是基督。&rdquo;</p>

	<p><sup class="versenum">4&nbsp;</sup>他们中间有些人听了劝，就附从<u class="person underline">保罗</u>和<u class="person underline">西拉</u>，并有许多虔敬的希腊人，尊贵的妇女也不少。<sup class="versenum">5&nbsp;</sup>但那不信的犹太人心里嫉妒，招聚了些市井匪类，搭伙成群，耸动合城的人闯进<u class="person underline">耶孙</u>的家，要将<u class="person underline">保罗</u>、<u class="person underline">西拉</u>带到百姓那里。<sup class="versenum">6&nbsp;</sup>找不着他们，就把<u class="person underline">耶孙</u>和几个弟兄拉到地方官那里，喊叫说：&ldquo;那搅乱天下的也到这里来了，<sup class="versenum">7&nbsp;</sup><u class="person underline">耶孙</u>收留他们！这些人都违背恺撒的命令，说另有一个王&mdash;&mdash;耶稣。&rdquo;<sup class="versenum">8&nbsp;</sup>众人和地方官听见这话，就惊慌了，<sup class="versenum">9&nbsp;</sup>于是取了<u class="person underline">耶孙</u>和其余之人的保状，就释放了他们。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="flush">看完视频或分组阅读以下经文，之后各自回答并写下以下有关和平之子问题的答案，然后报告。</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td>人物</td>
			<td>在遇到耶稣之前，这个人的生活是怎样的？</td>
			<td>这个人&ldquo;遇到耶稣&rdquo;（或信主）以后，有什么改变？</td>
		</tr>
		<tr>
			<td>撒玛利亚妇人</td>
			<td>
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

			</td>
			<td>
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

			</td>
		</tr>
		<tr>
			<td>撒该</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note4Text')"
        id="note4Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note5Text')"
        id="note5Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
		<tr>
			<td>被鬼附的人</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note6Text')"
        id="note6Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note7Text')"
        id="note7Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
		<tr>
			<td>吕底亚</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note8Text')"
        id="note8Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note9Text')"
        id="note9Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
		<tr>
			<td>
			<p class="forward">耶孙</p>
			</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note10Text')"
        id="note10Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note11Text')"
        id="note11Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
	</tbody>
</table>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><p class="forward">+ &ldquo;和平之子&rdquo;：</p></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p class="indent">&mdash;&mdash;是会接受你和你的信息的人（基督徒或非信徒），</p>

<p class="indent">&mdash;&mdash;是注重关系的人；</p>

<p class="indent">&mdash;&mdash;在某些情况下，他们甚至是一个我们意想不到的人，</p>

<p class="indent">&mdash;&mdash;他们会积极和热忱地接触身边的亲朋邻舍，并分享福音，</p>

<p class="indent">&mdash;&mdash;借着他们，福音因此扩展到新的群体和领域。</p>

<ul class="flush">
	<li class="flush">我们应该主动接触和期待找到上帝所预备的人，这是教会倍增的核心观念。我们已经学会如何使用&ldquo;奇妙的问题&rdquo;接触并关怀人，这是一个得着&ldquo;和平之子&rdquo;的好方法。</li>
	<li class="flush">如果上周你有分享&ldquo;奇妙的问题&rdquo;，请辨识哪些对象有&ldquo;和平之子&rdquo;的特质。然后在小组里分享自己的《福音行动表》，并为有潜力的&ldquo;和平之子&rdquo;祷告。</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在今天查考圣经中的&ldquo;和平之子&rdquo;人物，试想你是和平之子吗？为什么？下周与组员分享。</li>
	<li class="forward">从《福音行动表》中选出2人，本周与他们分享&ldquo;奇妙的问题&rdquo;，求神为你预备和平之子。</li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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
        @keyup="this.addNote('note12Text')"
        id="note12Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>福音祷告</h2>

<p>亲爱的天父，感谢祢没有按我们的过犯来待我们，祢借着祢的独生爱子舍命流血，为我们的罪付上刑罚，将我们挽回，使我们亲自经历祢的拯救和生命的转变。求祢帮助我们，在家人、亲友、校园、职场和社区的面前，凡事蒙恩宠有美名；在自己的岗位上尽忠，发挥影响力，借着&ldquo;奇妙的问题&rdquo;主动关怀人，并在他们当中找到祢已预备的&ldquo;和平之子&rdquo;。奉主耶稣基督的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->