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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>逼迫中蒙神拯救——信靠顺服</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒5:3-4</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">亚拿尼亚</u>，为什么<u class="person underline">撒旦</u>充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几份呢？<sup class="versenum">4&nbsp;</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你做主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄神了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">以人的眼光看逼迫是坏的，因为使徒们被逮捕、被审问、被恐吓，但上帝透过逼迫仍使福音被传扬，使神的名得荣耀，也坚固信徒们的信心。逼迫并不是一件与祝福相反的或是个别发生的事件。它乃是基督徒在信仰中都必须去经历的。主耶稣曾警告过门徒们，他们也会被弃绝和逼迫；并教导他们在他们被质问时要倚靠圣灵赐他们当说的话。在<span class="popup-link" @click = "popUp('pop2')"> 使徒行传4-5</span>章中，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>彼得约翰被拿</h3>

	<p><sup class="versenum">1 </sup>使徒对百姓说话的时候，祭司们和守殿官并撒都该人忽然来了。<sup class="versenum">2&nbsp;</sup>因他们教训百姓，本着耶稣传说死人复活，就很烦恼，<sup class="versenum">3&nbsp;</sup>于是下手拿住他们。因为天已经晚了，就把他们押到第二天。<sup class="versenum">4&nbsp;</sup>但听道之人有许多信的，男丁数目约到五千。</p>

	<h3>到公会前被审</h3>

	<p><sup class="versenum">5&nbsp;</sup>第二天，官府、长老和文士在耶路撒冷聚会，<sup class="versenum">6&nbsp;</sup>又有大祭司<u class="person underline">亚那</u>和<u class="person underline">该亚法</u>、<u class="person underline">约翰</u>、<u class="person underline">亚历山大</u>，并大祭司的亲族都在那里，<sup class="versenum">7&nbsp;</sup>叫使徒站在当中，就问他们说：&ldquo;你们用什么能力，奉谁的名做这事呢？&rdquo;<sup class="versenum">8&nbsp;</sup>那时<u class="person underline">彼得</u>被圣灵充满，对他们说：<sup class="versenum">9&nbsp;</sup>&ldquo;治民的官府和长老啊，倘若今日因为在残疾人身上所行的善事，查问我们他是怎么得了痊愈，<sup class="versenum">10&nbsp;</sup>你们众人和以色列百姓都当知道：站在你们面前的这人得痊愈，是因你们所钉十字架、神叫他从死里复活的拿撒勒人耶稣基督的名。</p>

	<h3>除了耶稣别无拯救</h3>

	<p><sup class="versenum">11&nbsp;</sup>&ldquo;他是&lsquo;你们匠人所弃的石头，已成了房角的头块石头&rsquo;。<sup class="versenum">12&nbsp;</sup>除他以外，别无拯救，因为在天下人间，没有赐下别的名我们可以靠着得救。&rdquo;</p>

	<h3>恐吓而放</h3>

	<p><sup class="versenum">13&nbsp;</sup>他们见<u class="person underline">彼得</u>、<u class="person underline">约翰</u>的胆量，又看出他们原是没有学问的小民，就稀奇，认明他们是跟过耶稣的。<sup class="versenum">14&nbsp;</sup>又看见那治好了的人和他们一同站着，就无话可驳。<sup class="versenum">15&nbsp;</sup>于是吩咐他们从公会出去，就彼此商议说：<sup class="versenum">16&nbsp;</sup>&ldquo;我们当怎样办这两个人呢？因为他们诚然行了一件明显的神迹，凡住耶路撒冷的人都知道，我们也不能说没有。<sup class="versenum">17&nbsp;</sup>唯恐这事越发传扬在民间，我们必须恐吓他们，叫他们不再奉这名对人讲论。&rdquo;<sup class="versenum">18&nbsp;</sup>于是叫了他们来，禁止他们总不可奉耶稣的名讲论、教训人。<sup class="versenum">19&nbsp;</sup><u class="person underline">彼得</u>、<u class="person underline">约翰</u>说：&ldquo;听从你们不听从神，这在神面前合理不合理，你们自己酌量吧！<sup class="versenum">20&nbsp;</sup>我们所看见、所听见的，不能不说。&rdquo;<sup class="versenum">21&nbsp;</sup>官长为百姓的缘故，想不出法子刑罚他们，又恐吓一番，把他们释放了。这是因众人为所行的奇事都归荣耀于神。<sup class="versenum">22&nbsp;</sup>原来借着神迹医好的那人有四十多岁了。</p>

	<h3>门徒同心祷告赞美</h3>

	<p><sup class="versenum">23&nbsp;</sup>二人既被释放，就到会友那里去，把祭司长和长老所说的话都告诉他们。<sup class="versenum">24&nbsp;</sup>他们听见了，就同心合意地高声向神说：&ldquo;主啊，你是造天、地、海和其中万物的！<sup class="versenum">25&nbsp;</sup>你曾借着圣灵，托你仆人&mdash;&mdash;我们祖宗<u class="person underline">大卫</u>的口说：&lsquo;外邦为什么争闹？万民为什么谋算虚妄的事？<sup class="versenum">26&nbsp;</sup>世上的君王一齐起来，臣宰也聚集，要抵挡主并主的受膏者。&rsquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">希律</u>和<u class="person underline">本丢</u>&middot;<u class="person underline">彼拉多</u>，外邦人和以色列民，果然在这城里聚集，要攻打你所膏的圣仆耶稣，<sup class="versenum">28&nbsp;</sup>成就你手和你意旨所预定必有的事。<sup class="versenum">29&nbsp;</sup>他们恐吓我们，现在求主鉴察，一面叫你仆人大放胆量讲你的道，<sup class="versenum">30&nbsp;</sup>一面伸出你的手来医治疾病，并且使神迹奇事因着你圣仆耶稣的名行出来。&rdquo;<sup class="versenum">31&nbsp;</sup>祷告完了，聚会的地方震动，他们就都被圣灵充满，放胆讲论神的道。</p>

	<h3>信徒财物不分彼此</h3>

	<p><sup class="versenum">32&nbsp;</sup>那许多信的人都是一心一意的，没有一人说他的东西有一样是自己的，都是大家公用。<sup class="versenum">33&nbsp;</sup>使徒大有能力，见证主耶稣复活，众人也都蒙大恩。<sup class="versenum">34&nbsp;</sup>内中也没有一个缺乏的，因为人人将田产房屋都卖了，把所卖的价银拿来，<sup class="versenum">35&nbsp;</sup>放在使徒脚前，照各人所需用的分给各人。</p>

	<h3>巴拿巴卖产捐银</h3>

	<p><sup class="versenum">36&nbsp;</sup>有一个利未人，生在塞浦路斯，名叫<u class="person underline">约瑟</u>，使徒称他为<u class="person underline">巴拿巴</u>（&ldquo;<u class="person underline">巴拿巴</u>&rdquo;翻出来就是&ldquo;劝慰子&rdquo;）。<sup class="versenum">37&nbsp;</sup>他有田地，也卖了，把价银拿来放在使徒脚前。</p>

	<h3>亚拿尼亚和撒非喇欺哄圣灵而死</h3>

	<p><sup class="versenum">1 </sup>有一个人名叫<u class="person underline">亚拿尼亚</u>，同他的妻子<u class="person underline">撒非喇</u>卖了田产，<sup class="versenum">2&nbsp;</sup>把价银私自留下几份，他的妻子也知道，其余的几份拿来放在使徒脚前。<sup class="versenum">3&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">亚拿尼亚</u>，为什么<u class="person underline">撒旦</u>充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几份呢？<sup class="versenum">4&nbsp;</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你做主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄神了！&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">亚拿尼亚</u>听见这话，就仆倒，断了气。听见的人都甚惧怕。<sup class="versenum">6&nbsp;</sup>有些少年人起来，把他包裹，抬出去埋葬了。</p>

	<p><sup class="versenum">7&nbsp;</sup>约过了三小时，他的妻子进来，还不知道这事。<sup class="versenum">8&nbsp;</sup><u class="person underline">彼得</u>对她说：&ldquo;你告诉我，你们卖田地的价银就是这些吗？&rdquo;她说：&ldquo;就是这些。&rdquo;<sup class="versenum">9&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们为什么同心试探主的灵呢？埋葬你丈夫之人的脚已到门口，他们也要把你抬出去。&rdquo;<sup class="versenum">10&nbsp;</sup>妇人立刻仆倒在<u class="person underline">彼得</u>脚前，断了气。那些少年人进来，见她已经死了，就抬出去，埋在她丈夫旁边。<sup class="versenum">11&nbsp;</sup>全教会和听见这事的人都甚惧怕。</p>

	<h3>信者越发增添</h3>

	<p><sup class="versenum">12&nbsp;</sup>主借使徒的手在民间行了许多神迹奇事。他们都同心合意地在<u class="person underline">所罗门</u>的廊下。<sup class="versenum">13&nbsp;</sup>其余的人没有一个敢贴近他们，百姓却尊重他们。<sup class="versenum">14&nbsp;</sup>信而归主的人越发增添，连男带女很多。<sup class="versenum">15&nbsp;</sup>甚至有人将病人抬到街上，放在床上或褥子上，指望<u class="person underline">彼得</u>过来的时候，或者得他的影儿照在什么人身上。<sup class="versenum">16&nbsp;</sup>还有许多人带着病人和被污鬼缠磨的，从耶路撒冷四围的城邑来，全都得了医治。</p>

	<h3>使徒二次被囚</h3>

	<p><sup class="versenum">17&nbsp;</sup>大祭司和他的一切同人，就是撒都该教门的人，都起来，满心忌恨，<sup class="versenum">18&nbsp;</sup>就下手拿住使徒，收在外监。</p>

	<h3>使徒出监仍然讲道</h3>

	<p><sup class="versenum">19&nbsp;</sup>但主的使者夜间开了监门，领他们出来，<sup class="versenum">20&nbsp;</sup>说：&ldquo;你们去站在殿里，把这生命的道都讲给百姓听。&rdquo;<sup class="versenum">21&nbsp;</sup>使徒听了这话，天将亮的时候就进殿里去教训人。大祭司和他的同人来了，叫齐公会的人和以色列族的众长老，就差人到监里去，要把使徒提出来。<sup class="versenum">22&nbsp;</sup>但差役到了，不见他们在监里，就回来禀报说：<sup class="versenum">23&nbsp;</sup>&ldquo;我们看见监牢关得极妥当，看守的人也站在门外，及至开了门，里面一个人都不见。&rdquo;<sup class="versenum">24&nbsp;</sup>守殿官和祭司长听见这话，心里犯难，不知这事将来如何。<sup class="versenum">25&nbsp;</sup>有一个人来禀报说：&ldquo;你们收在监里的人，现在站在殿里教训百姓！&rdquo;<sup class="versenum">26&nbsp;</sup>于是守殿官和差役去带使徒来，并没有用强暴，因为怕百姓用石头打他们。</p>

	<h3>再到公会前被审</h3>

	<p><sup class="versenum">27&nbsp;</sup>带到了，便叫使徒站在公会前。大祭司问他们说：<sup class="versenum">28&nbsp;</sup>&ldquo;我们不是严严地禁止你们，不可奉这名教训人吗？你们倒把你们的道理充满了耶路撒冷，想要叫这人的血归到我们身上！&rdquo;</p>

	<h3>彼得向官长分诉</h3>

	<p><sup class="versenum">29&nbsp;</sup><u class="person underline">彼得</u>和众使徒回答说：&ldquo;顺从神不顺从人，是应当的。<sup class="versenum">30&nbsp;</sup>你们挂在木头上杀害的耶稣，我们祖宗的神已经叫他复活。<sup class="versenum">31&nbsp;</sup>神且用右手将他高举，叫他做君王、做救主，将悔改的心和赦罪的恩赐给以色列人。<sup class="versenum">32&nbsp;</sup>我们为这事作见证，神赐给顺从之人的圣灵也为这事作见证。&rdquo;</p>

	<h3>迦玛列的劝诫</h3>

	<p><sup class="versenum">33&nbsp;</sup>公会的人听见就极其恼怒，想要杀他们。<sup class="versenum">34&nbsp;</sup>但有一个法利赛人名叫<u class="person underline">迦玛列</u>，是众百姓所敬重的教法师，在公会中站起来，吩咐人把使徒暂且带到外面去，<sup class="versenum">35&nbsp;</sup>就对众人说：&ldquo;以色列人哪，论到这些人，你们应当小心怎样办理。<sup class="versenum">36&nbsp;</sup>从前<u class="person underline">丢大</u>起来，自夸为大，附从他的人约有四百。他被杀后，附从他的全都散了，归于无有。<sup class="versenum">37&nbsp;</sup>此后，报名上册的时候，又有加利利的<u class="person underline">犹大</u>起来，引诱些百姓跟从他。他也灭亡，附从他的人也都四散了。<sup class="versenum">38&nbsp;</sup>现在我劝你们不要管这些人，任凭他们吧！他们所谋的、所行的，若是出于人，必要败坏；<sup class="versenum">39&nbsp;</sup>若是出于神，你们就不能败坏他们，恐怕你们倒是攻击神了！&rdquo;<sup class="versenum">40&nbsp;</sup>公会的人听从了他，便叫使徒来，把他们打了，又吩咐他们不可奉耶稣的名讲道，就把他们释放了。</p>

	<p><sup class="versenum">41&nbsp;</sup>他们离开公会，心里欢喜，因被算是配为这名受辱。<sup class="versenum">42&nbsp;</sup>他们就每日在殿里、在家里不住地教训人，传耶稣是基督。</p>
	<!-- end bible --></div>
	我们看到耶稣的预言具体地应验了（<span class="popup-link" @click = "popUp('pop3')"> 太5:10-12</span>；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>为义受逼迫的人有福了！因为天国是他们的。<sup class="versenum">11&nbsp;</sup>人若因我辱骂你们，逼迫你们，捏造各样坏话毁谤你们，你们就有福了。<sup class="versenum">12&nbsp;</sup>应当欢喜快乐，因为你们在天上的赏赐是大的。在你们以前的先知，人也是这样逼迫他们。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 太10:16-22</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>警戒勉励</h3>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。<sup class="versenum">17&nbsp;</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们，<sup class="versenum">18&nbsp;</sup>并且你们要为我的缘故被送到诸侯君王面前，对他们和外邦人作见证。<sup class="versenum">19&nbsp;</sup>你们被交的时候，不要思虑怎样说话或说什么话，到那时候必赐给你们当说的话；<sup class="versenum">20&nbsp;</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。</p>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;弟兄要把弟兄，父亲要把儿子，送到死地；儿女要与父母为敌，害死他们。<sup class="versenum">22&nbsp;</sup>并且你们要为我的名被众人恨恶，唯有忍耐到底的，必然得救。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 路9:1-5</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣叫齐了十二个门徒，给他们能力、权柄制伏一切的鬼，医治各样的病，<sup class="versenum">2&nbsp;</sup>又差遣他们去宣传神国的道、医治病人，<sup class="versenum">3&nbsp;</sup>对他们说：&ldquo;行路的时候不要带拐杖和口袋，不要带食物和银子，也不要带两件褂子。<sup class="versenum">4&nbsp;</sup>无论进哪一家，就住在那里，也从那里起行。<sup class="versenum">5&nbsp;</sup>凡不接待你们的，你们离开那城的时候，要把脚上的尘土跺下去，见证他们的不是。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 约15:18-20</span>；

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>&ldquo;世人若恨你们，你们知道，恨你们以先已经恨我了。<sup class="versenum">19&nbsp;</sup>你们若属世界，世界必爱属自己的。只因你们不属世界，乃是我从世界中拣选了你们，所以世界就恨你们。<sup class="versenum">20&nbsp;</sup>你们要记念我从前对你们所说的话：&lsquo;仆人不能大于主人。&rsquo;他们若逼迫了我，也要逼迫你们；若遵守了我的话，也要遵守你们的话。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> 约16:33</span>）。&nbsp;

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">33&nbsp;</sup>我将这些事告诉你们，是要叫你们在我里面有平安。在世上你们有苦难，但你们可以放心，我已经胜了世界。&rdquo;</p>
	<!-- end bible --></div>
	愿天父使我们在逆境中定睛仰望祂的信实与应许，相信祂必为我们开路和预备，使万事互相效力，叫我们效法祂儿子耶稣基督的样式。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">初代教会是一个在逼迫中成长的教会，这一个奉耶稣的名所形成的群体在日常生活中见证出主的爱，他们共同生活在一起，富有的人拿出自己所有的，凡物公用，没有人有缺乏。作者特别提到一个叫巴拿巴的门徒将自己的田产捐助出来（<span class="popup-link" @click = "popUp('pop11')"> 徒4:32-37</span>）；
	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<h3>信徒财物不分彼此</h3>

	<p><sup class="versenum">32&nbsp;</sup>那许多信的人都是一心一意的，没有一人说他的东西有一样是自己的，都是大家公用。<sup class="versenum">33&nbsp;</sup>使徒大有能力，见证主耶稣复活，众人也都蒙大恩。<sup class="versenum">34&nbsp;</sup>内中也没有一个缺乏的，因为人人将田产房屋都卖了，把所卖的价银拿来，<sup class="versenum">35&nbsp;</sup>放在使徒脚前，照各人所需用的分给各人。</p>

	<p><sup class="versenum">36&nbsp;</sup>有一个利未人，生在塞浦路斯，名叫<u class="person underline">约瑟</u>，使徒称他为<u class="person underline">巴拿巴</u>（&ldquo;<u class="person underline">巴拿巴</u>&rdquo;翻出来就是&ldquo;劝慰子&rdquo;）。<sup class="versenum">37&nbsp;</sup>他有田地，也卖了，把价银拿来放在使徒脚前。</p>
	<!-- end bible --></div>
	不过作者并没有美化这个属神的群体，他忠实地记下了一个和巴拿巴形成对比的事件，亚拿尼亚夫妇因为欺骗神而受到严厉的审判，这个事件突显了神对圣洁的看重（<span class="popup-link" @click = "popUp('pop8')"> 徒5:1-11</span>）。</li>
</ul>

<div class="popup invisible" id="pop8"><!-- begin bible -->
<p><sup class="versenum">1 </sup>有一个人名叫<u class="person underline">亚拿尼亚</u>，同他的妻子<u class="person underline">撒非喇</u>卖了田产，<sup class="versenum">2&nbsp;</sup>把价银私自留下几份，他的妻子也知道，其余的几份拿来放在使徒脚前。<sup class="versenum">3&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">亚拿尼亚</u>，为什么<u class="person underline">撒旦</u>充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几份呢？<sup class="versenum">4&nbsp;</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你做主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄神了！&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">亚拿尼亚</u>听见这话，就仆倒，断了气。听见的人都甚惧怕。<sup class="versenum">6&nbsp;</sup>有些少年人起来，把他包裹，抬出去埋葬了。</p>

<p><sup class="versenum">7&nbsp;</sup>约过了三小时，他的妻子进来，还不知道这事。<sup class="versenum">8&nbsp;</sup><u class="person underline">彼得</u>对她说：&ldquo;你告诉我，你们卖田地的价银就是这些吗？&rdquo;她说：&ldquo;就是这些。&rdquo;<sup class="versenum">9&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们为什么同心试探主的灵呢？埋葬你丈夫之人的脚已到门口，他们也要把你抬出去。&rdquo;<sup class="versenum">10&nbsp;</sup>妇人立刻仆倒在<u class="person underline">彼得</u>脚前，断了气。那些少年人进来，见她已经死了，就抬出去，埋在她丈夫旁边。<sup class="versenum">11&nbsp;</sup>全教会和听见这事的人都甚惧怕。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒5:12-42》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒5:12-42</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>主藉使徒的手在民间行了许多神迹奇事。他们（注：或作&ldquo;信的人&rdquo;）都同心合意地在所罗门的廊下；<sup>13</sup>其余的人没有一个敢贴近他们，百姓却尊重他们。<sup>14</sup>信而归主的人越发增添，连男带女很多。<sup>15</sup>甚至有人将病人抬到街上，放在床上或褥子上，指望彼得过来的时候，或者得他的影儿照在甚么人身上。<sup>16</sup>还有许多人带著病人和被污鬼缠磨的，从耶路撒冷四围的城邑来，全都得了医治。</p>

<p><sup>17</sup>大祭司和他的一切同人，就是撒都该教门的人，都起来，满心忌恨，<sup>18</sup>就下手拿住使徒，收在外监。<sup>19</sup>但主的使者夜间开了监门，领他们出来，<sup>20</sup>说：&ldquo;你们去站在殿里，把这生命的道都讲给百姓听。&rdquo;</p>

<p><sup>21</sup>使徒听了这话，天将亮的时候就进殿里去教训人。大祭司和他的同人来了，叫齐公会的人和以色列族的众长老，就差人到监里去，要把使徒提出来。<sup>22</sup>但差役到了，不见他们在监里，就回来禀报说：<sup>23</sup>&ldquo;我们看见监牢关得极妥当，看守的人也站在门外，及至开了门，里面一个人都不见！&rdquo;<sup>24</sup>守殿官和祭司长听见这话，心里犯难，不知这事将来如何。</p>

<p><sup>25</sup>有一个人来禀报说：&ldquo;你们收在监里的人，现在站在殿里教训百姓。 &rdquo;<sup>26</sup>于是守殿官和差役去带使徒来，并没有用强暴，因为怕百姓用石头打他们。<sup>27</sup>带到了，便叫使徒站在公会前。大祭司问他们说：<sup>28</sup>&ldquo;我们不是严严地禁止你们，不可奉这名教训人吗？你们倒把你们的道理充满了耶路撒冷，想要叫这人的血归到我们身上！&rdquo; <sup>29</sup>彼得和众使徒回答说：&ldquo;顺从　神，不顺从人，是应当的！<sup>30</sup>你们挂在木头上杀害的耶稣，我们祖宗的　神已经叫他复活。<sup>31</sup>神且用右手将他高举（注：或作&ldquo;他就是　神高举在自己的右边&rdquo;），叫他作君王、作救主，将悔改的心和赦罪的恩赐给以色列人。<sup>32</sup>我们为这事作见证，　神赐给顺从之人的圣灵也为这事作见证。&rdquo;</p>

<p><sup>33</sup>公会的人听见就极其恼怒，想要杀他们。<sup>34</sup>但有一个法利赛人，名叫迦玛列，是众百姓所敬重的教法师，在公会中站起来，吩咐人把使徒暂且带到外面去，<sup>35</sup>就对众人说：&ldquo;以色列人哪，论到这些人，你们应当小心怎样办理。<sup>36</sup>从前丢大起来，自夸为大，附从他的人约有四百；他被杀后，附从他的全都散了，归于无有。<sup>37</sup>此后，报名上册的时候，又有加利利的犹大起来，引诱些百姓跟从他；他也灭亡，附从他的人也都四散了。<sup>38</sup>现在，我劝你们不要管这些人，任凭他们吧！他们所谋的、所行的，若是出于人，必要败坏；<sup>39</sup>若是出于　神，你们就不能败坏他们，恐怕你们倒是攻击　神了。&rdquo;</p>

<p><sup>40</sup>公会的人听从了他，便叫使徒来，把他们打了，又吩咐他们不可奉耶稣的名讲道，就把他们释放了。<sup>41</sup>他们离开公会，心里欢喜，因被算是配为这名受辱。<sup>42</sup>他们就每日在殿里、在家鶪不住地教训人，传耶稣是基督。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/309.mp4" type="button" class="external-movie">
         观看徒5:12-42</button>
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
<div id="Summary0" class="summary"><ul><li class="up"><strong>+ 小结</strong></li></ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul><li class="nobreak-final-final">信徒在耶路撒冷的居民当中有美好的名声。许多住在四围城邑和村庄的人，因耶路撒冷教会的事工，纷纷到这里来。纵然使徒做了耶稣训练他们去做的一切事：医病、赶鬼、传讲天国的好消息（<span class="popup-link" @click = "popUp('pop9')"> 马太福音10</span>章；
	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<h3>耶稣差遣十二使徒</h3>

	<p><sup class="versenum">1 </sup>耶稣叫了十二个门徒来，给他们权柄，能赶逐污鬼，并医治各样的病症。</p>

	<p><sup class="versenum">2&nbsp;</sup>这十二使徒的名：头一个叫<u class="person underline">西门</u>，又称<u class="person underline">彼得</u>，还有他兄弟<u class="person underline">安得烈</u>，<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>，<sup class="versenum">3&nbsp;</sup><u class="person underline">腓力</u>和<u class="person underline">巴多罗买</u>，<u class="person underline">多马</u>和税吏<u class="person underline">马太</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>，和<u class="person underline">达太</u>，<sup class="versenum">4&nbsp;</sup>奋锐党的<u class="person underline">西门</u>，还有卖耶稣的加略人<u class="person underline">犹大</u>。</p>

	<p><sup class="versenum">5&nbsp;</sup>耶稣差这十二个人去，吩咐他们说：&ldquo;外邦人的路你们不要走，撒马利亚人的城你们不要进，<sup class="versenum">6&nbsp;</sup>宁可往以色列家迷失的羊那里去。<sup class="versenum">7&nbsp;</sup>随走随传，说&lsquo;天国近了&rsquo;。<sup class="versenum">8&nbsp;</sup>医治病人，叫死人复活，叫长大麻风的洁净，把鬼赶出去。你们白白地得来，也要白白地舍去。<sup class="versenum">9&nbsp;</sup>腰袋里不要带金银铜钱，<sup class="versenum">10&nbsp;</sup>行路不要带口袋，不要带两件褂子，也不要带鞋和拐杖，因为工人得饮食是应当的。<sup class="versenum">11&nbsp;</sup>你们无论进哪一城、哪一村，要打听那里谁是好人，就住在他家，直住到走的时候。<sup class="versenum">12&nbsp;</sup>进他家里去，要请他的安。<sup class="versenum">13&nbsp;</sup>那家若配得平安，你们所求的平安就必临到那家；若不配得，你们所求的平安仍归你们。<sup class="versenum">14&nbsp;</sup>凡不接待你们、不听你们话的人，你们离开那家或是那城的时候，就把脚上的尘土跺下去。<sup class="versenum">15&nbsp;</sup>我实在告诉你们：当审判的日子，所多玛和蛾摩拉所受的比那城还容易受呢！</p>

	<h3>警戒勉励</h3>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。<sup class="versenum">17&nbsp;</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们，<sup class="versenum">18&nbsp;</sup>并且你们要为我的缘故被送到诸侯君王面前，对他们和外邦人作见证。<sup class="versenum">19&nbsp;</sup>你们被交的时候，不要思虑怎样说话或说什么话，到那时候必赐给你们当说的话；<sup class="versenum">20&nbsp;</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。</p>

	<h3>服侍主之艰难</h3>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;弟兄要把弟兄，父亲要把儿子，送到死地；儿女要与父母为敌，害死他们。<sup class="versenum">22&nbsp;</sup>并且你们要为我的名被众人恨恶，唯有忍耐到底的，必然得救。<sup class="versenum">23&nbsp;</sup>有人在这城里逼迫你们，就逃到那城里去。我实在告诉你们：以色列的城邑你们还没有走遍，人子就到了。</p>

	<h3>学生不能高过先生</h3>

	<p><sup class="versenum">24&nbsp;</sup>&ldquo;学生不能高过先生，仆人不能高过主人。<sup class="versenum">25&nbsp;</sup>学生和先生一样，仆人和主人一样，也就罢了。人既骂家主是<u class="person underline">别西卜</u>，何况他的家人呢？<sup class="versenum">26&nbsp;</sup>所以不要怕他们，因为掩盖的事没有不露出来的，隐藏的事没有不被人知道的。<sup class="versenum">27&nbsp;</sup>我在暗中告诉你们的，你们要在明处说出来；你们耳中所听的，要在房上宣扬出来。<sup class="versenum">28&nbsp;</sup>那杀身体不能杀灵魂的，不要怕他们；唯有能把身体和灵魂都灭在地狱里的，正要怕他。<sup class="versenum">29&nbsp;</sup>两个麻雀不是卖一分银子吗？若是你们的父不许，一个也不能掉在地上。<sup class="versenum">30&nbsp;</sup>就是你们的头发，也都被数过了。<sup class="versenum">31&nbsp;</sup>所以，不要惧怕，你们比许多麻雀还贵重。<sup class="versenum">32&nbsp;</sup>凡在人面前认我的，我在我天上的父面前也必认他；<sup class="versenum">33&nbsp;</sup>凡在人面前不认我的，我在我天上的父面前也必不认他。</p>

	<p><sup class="versenum">34&nbsp;</sup>&ldquo;你们不要想我来是叫地上太平，我来并不是叫地上太平，乃是叫地上动刀兵。<sup class="versenum">35&nbsp;</sup>因为我来是叫&lsquo;人与父亲生疏，女儿与母亲生疏，媳妇与婆婆生疏；<sup class="versenum">36&nbsp;</sup>人的仇敌就是自己家里的人&rsquo;。<sup class="versenum">37&nbsp;</sup>爱父母过于爱我的，不配做我的门徒；爱儿女过于爱我的，不配做我的门徒；<sup class="versenum">38&nbsp;</sup>不背着他的十字架跟从我的，也不配做我的门徒。<sup class="versenum">39&nbsp;</sup>得着生命的，将要失丧生命；为我失丧生命的，将要得着生命。</p>

	<p><sup class="versenum">40&nbsp;</sup>&ldquo;人接待你们，就是接待我；接待我，就是接待那差我来的。<sup class="versenum">41&nbsp;</sup>人因为先知的名接待先知，必得先知所得的赏赐；人因为义人的名接待义人，必得义人所得的赏赐。<sup class="versenum">42&nbsp;</sup>无论何人，因为门徒的名，只把一杯凉水给这小子里的一个喝，我实在告诉你们：这人不能不得赏赐。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop10')"> 路加福音10</span>章），

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<h3>主差遣七十人</h3>

	<p><sup class="versenum">1 </sup>这事以后，主又设立七十个人，差遣他们两个两个地在他前面，往自己所要到的各城各地方去。<sup class="versenum">2&nbsp;</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主，打发工人出去收他的庄稼。<sup class="versenum">3&nbsp;</sup>你们去吧！我差你们出去，如同羊羔进入狼群。<sup class="versenum">4&nbsp;</sup>不要带钱囊，不要带口袋，不要带鞋，在路上也不要问人的安。<sup class="versenum">5&nbsp;</sup>无论进哪一家，先要说：&lsquo;愿这一家平安！&rsquo;<sup class="versenum">6&nbsp;</sup>那里若有当得平安的人，你们所求的平安就必临到那家；不然，就归于你们了。<sup class="versenum">7&nbsp;</sup>你们要住在那家，吃喝他们所供给的，因为工人得工价是应当的。不要从这家搬到那家。</p>

	<h3>传神的国临近</h3>

	<p><sup class="versenum">8&nbsp;</sup>&ldquo;无论进哪一城，人若接待你们，给你们摆上什么，你们就吃什么。<sup class="versenum">9&nbsp;</sup>要医治那城里的病人，对他们说：&lsquo;神的国临近你们了。&rsquo;<sup class="versenum">10&nbsp;</sup>无论进哪一城，人若不接待你们，你们就到街上去，<sup class="versenum">11&nbsp;</sup>说：&lsquo;就是你们城里的尘土粘在我们的脚上，我们也当着你们擦去。虽然如此，你们该知道神的国临近了。&rsquo;<sup class="versenum">12&nbsp;</sup>我告诉你们：当审判的日子，所多玛所受的比那城还容易受呢！<sup class="versenum">13&nbsp;</sup>哥拉汛哪，你有祸了！伯赛大啊，你有祸了！因为在你们中间所行的异能，若行在推罗、西顿，他们早已披麻蒙灰、坐在地上悔改了。<sup class="versenum">14&nbsp;</sup>当审判的日子，推罗、西顿所受的比你们还容易受呢！<sup class="versenum">15&nbsp;</sup>迦百农啊，你已经升到天上，将来必推下阴间！&rdquo;<sup class="versenum">16&nbsp;</sup>又对门徒说：&ldquo;听从你们的，就是听从我；弃绝你们的，就是弃绝我；弃绝我的，就是弃绝那差我来的。&rdquo;</p>

	<h3>七十人回来</h3>

	<p><sup class="versenum">17&nbsp;</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊，因你的名，就是鬼也服了我们！&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;我曾看见<u class="person underline">撒旦</u>从天上坠落，像闪电一样。<sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

	<h3>耶稣欢乐</h3>

	<p><sup class="versenum">21&nbsp;</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊，是的，因为你的美意本是如此。<sup class="versenum">22&nbsp;</sup>一切所有的，都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了！<sup class="versenum">24&nbsp;</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>

	<h3>撒马利亚人怜爱受伤的</h3>

	<p><sup class="versenum">25&nbsp;</sup>有一个律法师起来试探耶稣，说：&ldquo;夫子，我该做什么才可以承受永生？&rdquo;<sup class="versenum">26&nbsp;</sup>耶稣对他说：&ldquo;律法上写的是什么？你念的是怎样呢？&rdquo;<sup class="versenum">27&nbsp;</sup>他回答说：&ldquo;你要尽心、尽性、尽力、尽意爱主你的神，又要爱邻舍如同自己。&rdquo;<sup class="versenum">28&nbsp;</sup>耶稣说：&ldquo;你回答的是。你这样行，就必得永生。&rdquo;<sup class="versenum">29&nbsp;</sup>那人要显明自己有理，就对耶稣说：&ldquo;谁是我的邻舍呢？&rdquo;<sup class="versenum">30&nbsp;</sup>耶稣回答说：&ldquo;有一个人从耶路撒冷下耶利哥去，落在强盗手中。他们剥去他的衣裳，把他打个半死，就丢下他走了。<sup class="versenum">31&nbsp;</sup>偶然有一个祭司从这条路下来，看见他，就从那边过去了。<sup class="versenum">32&nbsp;</sup>又有一个利未人来到这地方，看见他，也照样从那边过去了。<sup class="versenum">33&nbsp;</sup>唯有一个撒马利亚人行路来到那里，看见他，就动了慈心，<sup class="versenum">34&nbsp;</sup>上前用油和酒倒在他的伤处，包裹好了，扶他骑上自己的牲口，带到店里去照应他。<sup class="versenum">35&nbsp;</sup>第二天拿出二钱银子来，交给店主说：&lsquo;你且照应他，此外所费用的，我回来必还你。&rsquo;<sup class="versenum">36&nbsp;</sup>你想，这三个人哪一个是落在强盗手中的邻舍呢？&rdquo;<sup class="versenum">37&nbsp;</sup>他说：&ldquo;是怜悯他的。&rdquo;耶稣说：&ldquo;你去照样行吧。&rdquo;</p>

	<p><sup class="versenum">38&nbsp;</sup>他们走路的时候，耶稣进了一个村庄。有一个女人名叫<u class="person underline">马大</u>，接他到自己家里。<sup class="versenum">39&nbsp;</sup>她有一个妹子名叫<u class="person underline">马利亚</u>，在耶稣脚前坐着听他的道。<sup class="versenum">40&nbsp;</sup><u class="person underline">马大</u>伺候的事多，心里忙乱，就进前来说：&ldquo;主啊，我的妹子留下我一个人伺候，你不在意吗？请吩咐她来帮助我。&rdquo;<sup class="versenum">41&nbsp;</sup>耶稣回答说：&ldquo;<u class="person underline">马大</u>，<u class="person underline">马大</u>，你为许多的事思虑烦扰，<sup class="versenum">42&nbsp;</sup>但是不可少的只有一件。<u class="person underline">马利亚</u>已经选择那上好的福分，是不能夺去的。&rdquo;</p>
	<!-- end bible --></div>
	可是他们并没有去到耶路撒冷以外的人当中。宗教领袖因使徒受欢迎而满心忌恨，如同过去对待耶稣一样，他们也开始逼迫使徒。耶稣再一次干预，差派天使进到监狱，用奇妙的方式领他们出来。当他们再次面对宗教领袖的质问时，彼得坚持要顺从上帝过于顺从人。宗教领袖对使徒的逼迫愈发加剧，开始以武力对待。使徒因耶稣的名受凌辱，心里欢喜，反映出能像耶稣一样受苦是一件荣耀的事。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒5:29</p>

<p class="forward bible">彼得和众使徒回答说：&ldquo;顺从　神，不顺从人，是应当的！</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你曾经为耶稣基督的名受辱吗？你感受如何？就你所知，今日还有人为耶稣的名殉道或不怕恶势力为主作见证吗？结果如何？</li>
	<li class="forward">如果有人陷害你，诬告你，你能够原谅他/她吗？在什么样的情形下，你才会原谅他/她？这段经文给你们什么提醒、安慰或反思吗？为什么？</li>
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
	<li class="forward">我们如何看待问题，就决定心里情感的回应。如果看为主名受苦是耻辱，心里肯定百般不情愿，想尽办法逃避。如果看为主名受苦是荣耀，心里肯定极其欢喜。作恶受苦是耻辱，是罪有应得。行善受苦是荣耀。因遵行神的旨意被人羞辱、遭人迫害，不是耻辱，而是极大的荣耀。一般人还不配为行善受苦，因为他们还不够资格。
	<ul class="forward">
		<li class="forward">花时间亲近主，向主敞开自己：&ldquo;我今天怕什么？我看为主受苦是耻辱？或是荣耀？我是否愿意信靠顺服神？&rdquo; 把从神话语领受的写下，与属灵同伴分享并彼此代祷。</li>
		<li class="forward">为你所知道的教会或牧者同工代求，在逼迫患难，甚至为主受苦时，主在他们身边，成为他们最大的安慰、喜乐和荣耀。求神坚定他们的心志，有盼望和信心看神要在国家或众教会将要成就的奇妙作为，心就因此喜乐和刚强。</li>
	</ul>
	</li>
	<li class="forward">阅读附录：《宣教士：安乐欢》，把阅读心得和反思写下，下周在小组中分享。</li>
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

<p class="forward">统管万有的主，祢说我们的头发都被数过了，祢若不许可，我们连一根头发也必不损坏。祢是执掌王权的主，王的心在祢手中，好像陇沟的水随意流转。愿人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上如同行在天上。在我们听到基督徒在世界各地，甚至我们自己也正经历为主的名受逼迫、受凌辱和受迫害时，求主坚定我们众人的信心，圣灵使我们心里的力量刚强起来，能灵巧像蛇，驯良像鸽子，并向主至死忠心。奉主耶稣的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->