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
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>司提反辩护——逼迫中卫道</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒6:10-11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup><u class="person underline">司提反</u>是以智慧和圣灵说话，众人抵挡不住。<sup class="versenum">11&nbsp;</sup>就买出人来说：&ldquo;我们听见他说谤讟<u class="person underline">摩西</u>和神的话。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">因遵行神的旨意被人羞辱、遭人迫害，不是耻辱，而是极大的荣耀。一般人还不配为行善受苦，因为他们还不够资格。&ldquo;他们就每日在殿里、在家里，不住地教训人，传耶稣是基督。&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒5:42</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>他们就每日在殿里、在家里不住地教训人，传耶稣是基督。</p>
	<!-- end bible --></div>
	他们正是因传耶稣是基督而面对这一切的迫害，现在竟然不逃避，每天公然在殿里、在家里，不住地教训人，传耶稣是基督。我们今天怕什么？我们看为主受苦是耻辱，或是荣耀？我们是否信靠主在逼迫中勇敢为真道辩护？</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在第六章，犹太人对信徒的逼迫，在司提反的事上达到高峰。司提反的工作使初期教会的增长进入一个很重要的阶段。他的教训&ldquo;首先在犹太教与基督教间劈开了一个缺口&rdquo;。司提反的辩护就像彼得在以前（<span class="popup-link" @click = "popUp('pop3')"> 徒4-5</span>章）</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
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

<p>和保罗在以后（<span class="popup-link" @click = "popUp('pop4')"> 徒23-26</span>章）</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<h3>保罗在公会前声明</h3>

<p><sup class="versenum">1 </sup><u class="person underline">保罗</u>定睛看着公会的人，说：&ldquo;弟兄们，我在神面前行事为人都是凭着良心，直到今日。&rdquo;<sup class="versenum">2&nbsp;</sup>大祭司<u class="person underline">亚拿尼亚</u>就吩咐旁边站着的人打他的嘴。<sup class="versenum">3&nbsp;</sup><u class="person underline">保罗</u>对他说：&ldquo;你这粉饰的墙，神要打你！你坐堂为的是按律法审问我，你竟违背律法，吩咐人打我吗？&rdquo;<sup class="versenum">4&nbsp;</sup>站在旁边的人说：&ldquo;你辱骂神的大祭司吗？&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;弟兄们，我不晓得他是大祭司。经上记着说：&lsquo;不可毁谤你百姓的官长。&rsquo;&rdquo;<sup class="versenum">6&nbsp;</sup><u class="person underline">保罗</u>看出大众一半是撒都该人，一半是法利赛人，就在公会中大声说：&ldquo;弟兄们，我是法利赛人，也是法利赛人的子孙。我现在受审问，是为盼望死人复活。&rdquo;<sup class="versenum">7&nbsp;</sup>说了这话，法利赛人和撒都该人就争论起来，会众分为两党。<sup class="versenum">8&nbsp;</sup>因为撒都该人说没有复活，也没有天使和鬼魂，法利赛人却说两样都有。<sup class="versenum">9&nbsp;</sup>于是大大地喧嚷起来，有几个法利赛党的文士站起来争辩，说：&ldquo;我们看不出这人有什么恶处。倘若有鬼魂或是天使对他说过话，怎么样呢？&rdquo;<sup class="versenum">10&nbsp;</sup>那时大起争吵，千夫长恐怕<u class="person underline">保罗</u>被他们扯碎了，就吩咐兵丁下去，把他从众人当中抢出来，带进营楼去。</p>

<p><sup class="versenum">11&nbsp;</sup>当夜，主站在<u class="person underline">保罗</u>旁边，说：&ldquo;放心吧！你怎样在耶路撒冷为我作见证，也必怎样在罗马为我作见证。&rdquo;</p>

<h3>四十多人同谋杀害保罗</h3>

<p><sup class="versenum">12&nbsp;</sup>到了天亮，犹太人同谋起誓，说若不先杀<u class="person underline">保罗</u>就不吃不喝。<sup class="versenum">13&nbsp;</sup>这样同心起誓的有四十多人。<sup class="versenum">14&nbsp;</sup>他们来见祭司长和长老说：&ldquo;我们已经起了一个大誓，若不先杀<u class="person underline">保罗</u>就不吃什么。<sup class="versenum">15&nbsp;</sup>现在你们和公会要知会千夫长，叫他带下<u class="person underline">保罗</u>到你们这里来，假作要详细察考他的事。我们已经预备好了，不等他来到跟前就杀他。&rdquo;</p>

<h3>计谋泄露</h3>

<p><sup class="versenum">16&nbsp;</sup><u class="person underline">保罗</u>的外甥听见他们设下埋伏，就来到营楼里告诉<u class="person underline">保罗</u>。<sup class="versenum">17&nbsp;</sup><u class="person underline">保罗</u>请一个百夫长来，说：&ldquo;你领这少年人去见千夫长，他有事告诉他。&rdquo;<sup class="versenum">18&nbsp;</sup>于是把他领去见千夫长，说：&ldquo;被囚的<u class="person underline">保罗</u>请我到他那里，求我领这少年人来见你，他有事告诉你。&rdquo;<sup class="versenum">19&nbsp;</sup>千夫长就拉着他的手，走到一旁，私下问他说：&ldquo;你有什么事告诉我呢？&rdquo;<sup class="versenum">20&nbsp;</sup>他说：&ldquo;犹太人已经约定，要求你明天带下<u class="person underline">保罗</u>到公会里去，假作要详细查问他的事。<sup class="versenum">21&nbsp;</sup>你切不要随从他们，因为他们有四十多人埋伏，已经起誓说，若不先杀<u class="person underline">保罗</u>就不吃不喝。现在预备好了，只等你应允。&rdquo;<sup class="versenum">22&nbsp;</sup>于是千夫长打发少年人走，嘱咐他说：&ldquo;不要告诉人你将这事报给我了。&rdquo;<sup class="versenum">23&nbsp;</sup>千夫长便叫了两个百夫长来，说：&ldquo;预备步兵二百、马兵七十、长枪手二百，今夜亥初往恺撒利亚去。<sup class="versenum">24&nbsp;</sup>也要预备牲口叫<u class="person underline">保罗</u>骑上，护送到巡抚<u class="person underline">腓力斯</u>那里去。&rdquo;</p>

<h3>克劳迪呈文书给腓力斯</h3>

<p><sup class="versenum">25&nbsp;</sup>千夫长又写了文书，<sup class="versenum">26&nbsp;</sup>大略说：&ldquo;<u class="person underline">克劳迪</u>&middot;<u class="person underline">吕西亚</u>请巡抚<u class="person underline">腓力斯</u>大人安！<sup class="versenum">27&nbsp;</sup>这人被犹太人拿住，将要杀害，我得知他是罗马人，就带兵丁下去救他出来。<sup class="versenum">28&nbsp;</sup>因要知道他们告他的缘故，我就带他下到他们的公会去，<sup class="versenum">29&nbsp;</sup>便查知他被告是因他们律法的辩论，并没有什么该死、该绑的罪名。<sup class="versenum">30&nbsp;</sup>后来有人把要害他的计谋告诉我，我就立时解他到你那里去，又吩咐告他的人在你面前告他。&rdquo;</p>

<h3>保罗在恺撒利亚被看守</h3>

<p><sup class="versenum">31&nbsp;</sup>于是兵丁照所吩咐他们的，将<u class="person underline">保罗</u>夜里带到安提帕底。<sup class="versenum">32&nbsp;</sup>第二天，让马兵护送，他们就回营楼去。<sup class="versenum">33&nbsp;</sup>马兵来到恺撒利亚，把文书呈给巡抚，便叫<u class="person underline">保罗</u>站在他面前。<sup class="versenum">34&nbsp;</sup>巡抚看了文书，问<u class="person underline">保罗</u>是哪省的人，既晓得他是基利家人，<sup class="versenum">35&nbsp;</sup>就说：&ldquo;等告你的人来到，我要细听你的事。&rdquo;便吩咐人把他看守在<u class="person underline">希律</u>的衙门里。</p>

<h3>保罗在腓力斯前为自己分诉</h3>

<p><sup class="versenum">1 </sup>过了五天，大祭司<u class="person underline">亚拿尼亚</u>同几个长老和一个辩士<u class="person underline">帖土罗</u>下来，向巡抚控告<u class="person underline">保罗</u>。<sup class="versenum">2&nbsp;</sup><u class="person underline">保罗</u>被提了来，<u class="person underline">帖土罗</u>就告他说：<sup class="versenum">3&nbsp;</sup>&ldquo;<u class="person underline">腓力斯</u>大人，我们因你得以大享太平，并且这一国的弊病因着你的先见得以更正了，我们随时随地满心感谢不尽。<sup class="versenum">4&nbsp;</sup>唯恐多说，你嫌烦絮，只求你宽容听我们说几句话。<sup class="versenum">5&nbsp;</sup>我们看这个人如同瘟疫一般，是鼓动普天下众犹太人生乱的，又是拿撒勒教党里的一个头目。<sup class="versenum">6&nbsp;</sup>连圣殿他也想要污秽，我们把他捉住了。<sup class="versenum">8&nbsp;</sup>你自己究问他，就可以知道我们告他的一切事了。&rdquo;<sup class="versenum">9&nbsp;</sup>众犹太人也随着告他说：&ldquo;事情诚然是这样。&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>巡抚点头叫<u class="person underline">保罗</u>说话，他就说：&ldquo;我知道你在这国里断事多年，所以我乐意为自己分诉。<sup class="versenum">11&nbsp;</sup>你查问就可以知道，从我上耶路撒冷礼拜到今日，不过有十二天。<sup class="versenum">12&nbsp;</sup>他们并没有看见我在殿里或是在会堂里，或是在城里，和人辩论，耸动众人。<sup class="versenum">13&nbsp;</sup>他们现在所告我的事并不能对你证实了。<sup class="versenum">14&nbsp;</sup>但有一件事，我向你承认，就是他们所称为异端的道，我正按着那道侍奉我祖宗的神，又信合乎律法的和先知书上一切所记载的；<sup class="versenum">15&nbsp;</sup>并且靠着神，盼望死人无论善恶都要复活，就是他们自己也有这个盼望。<sup class="versenum">16&nbsp;</sup>我因此自己勉励，对神、对人常存无亏的良心。<sup class="versenum">17&nbsp;</sup>过了几年，我带着周济本国的捐项和供献的物上去。<sup class="versenum">18&nbsp;</sup>正献的时候，他们看见我在殿里已经洁净了，并没有聚众，也没有吵嚷，唯有几个从亚细亚来的犹太人。<sup class="versenum">19&nbsp;</sup>他们若有告我的事，就应当到你面前来告我。<sup class="versenum">20&nbsp;</sup>即或不然，这些人若看出我站在公会前有妄为的地方，他们自己也可以说明。<sup class="versenum">21&nbsp;</sup>纵然有，也不过一句话，就是我站在他们中间大声说：&lsquo;我今日在你们面前受审，是为死人复活的道理。&rsquo;&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup><u class="person underline">腓力斯</u>本是详细晓得这道，就支吾他们，说：&ldquo;且等千夫长<u class="person underline">吕西亚</u>下来，我要审断你们的事。&rdquo;<sup class="versenum">23&nbsp;</sup>于是吩咐百夫长看守<u class="person underline">保罗</u>，并且宽待他，也不拦阻他的亲友来供给他。</p>

<h3>腓力斯留保罗在监里</h3>

<p><sup class="versenum">24&nbsp;</sup>过了几天，<u class="person underline">腓力斯</u>和他夫人犹太的女子<u class="person underline">土西拉</u>一同来到，就叫了<u class="person underline">保罗</u>来，听他讲论信基督耶稣的道。<sup class="versenum">25&nbsp;</sup><u class="person underline">保罗</u>讲论公义、节制和将来的审判，<u class="person underline">腓力斯</u>甚觉恐惧，说：&ldquo;你暂且去吧，等我得便再叫你来。&rdquo;<sup class="versenum">26&nbsp;</sup><u class="person underline">腓力斯</u>又指望<u class="person underline">保罗</u>送他银钱，所以屡次叫他来，和他谈论。<sup class="versenum">27&nbsp;</sup>过了两年，<u class="person underline">波求</u>&middot;<u class="person underline">非斯都</u>接了<u class="person underline">腓力斯</u>的任；<u class="person underline">腓力斯</u>要讨犹太人的喜欢，就留<u class="person underline">保罗</u>在监里。</p>

<h3>犹太人的控告和央求</h3>

<p><sup class="versenum">1 </sup><u class="person underline">非斯都</u>到了任，过了三天，就从恺撒利亚上耶路撒冷去。<sup class="versenum">2&nbsp;</sup>祭司长和犹太人的首领向他控告<u class="person underline">保罗</u>，<sup class="versenum">3&nbsp;</sup>又央告他，求他的情将<u class="person underline">保罗</u>提到耶路撒冷来，他们要在路上埋伏杀害他。<sup class="versenum">4&nbsp;</sup><u class="person underline">非斯都</u>却回答说：&ldquo;<u class="person underline">保罗</u>押在恺撒利亚，我自己快要往那里去。&rdquo;<sup class="versenum">5&nbsp;</sup>又说：&ldquo;你们中间有权势的人与我一同下去，那人若有什么不是，就可以告他。&rdquo;</p>

<h3>保罗上控恺撒</h3>

<p><sup class="versenum">6&nbsp;</sup><u class="person underline">非斯都</u>在他们那里住了不过十天八天，就下恺撒利亚去。第二天坐堂，吩咐将<u class="person underline">保罗</u>提上来。<sup class="versenum">7&nbsp;</sup><u class="person underline">保罗</u>来了，那些从耶路撒冷下来的犹太人周围站着，将许多重大的事控告他，都是不能证实的。<sup class="versenum">8&nbsp;</sup><u class="person underline">保罗</u>分诉说：&ldquo;无论犹太人的律法或是圣殿，或是恺撒，我都没有干犯。&rdquo;<sup class="versenum">9&nbsp;</sup>但<u class="person underline">非斯都</u>要讨犹太人的喜欢，就问<u class="person underline">保罗</u>说：&ldquo;你愿意上耶路撒冷去，在那里听我审断这事吗？&rdquo;<sup class="versenum">10&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;我站在恺撒的堂前，这就是我应当受审的地方。我向犹太人并没有行过什么不义的事，这也是你明明知道的。<sup class="versenum">11&nbsp;</sup>我若行了不义的事，犯了什么该死的罪，就是死，我也不辞。他们所告我的事若都不实，就没有人可以把我交给他们。我要上告于恺撒。&rdquo;<sup class="versenum">12&nbsp;</sup><u class="person underline">非斯都</u>和议会商量了，就说：&ldquo;你既上告于恺撒，可以往恺撒那里去。&rdquo;</p>

<h3>亚基帕要听保罗</h3>

<p><sup class="versenum">13&nbsp;</sup>过了些日子，<u class="person underline">亚基帕</u>王和<u class="person underline">百妮基</u>氏来到恺撒利亚，问<u class="person underline">非斯都</u>安。<sup class="versenum">14&nbsp;</sup>在那里住了多日，<u class="person underline">非斯都</u>将<u class="person underline">保罗</u>的事告诉王，说：&ldquo;这里有一个人，是<u class="person underline">腓力斯</u>留在监里的。<sup class="versenum">15&nbsp;</sup>我在耶路撒冷的时候，祭司长和犹太的长老将他的事禀报了我，求我定他的罪。<sup class="versenum">16&nbsp;</sup>我对他们说，无论什么人，被告还没有和原告对质，未得机会分诉所告他的事，就先定他的罪，这不是罗马人的条例。<sup class="versenum">17&nbsp;</sup>及至他们都来到这里，我就不耽延，第二天便坐堂，吩咐把那人提上来。<sup class="versenum">18&nbsp;</sup>告他的人站着告他，所告的，并没有我所逆料的那等恶事。<sup class="versenum">19&nbsp;</sup>不过是有几样辩论，为他们自己敬鬼神的事，又为一个人名叫耶稣，是已经死了，<u class="person underline">保罗</u>却说他是活着的。<sup class="versenum">20&nbsp;</sup>这些事当怎样究问，我心里作难，所以问他说：&lsquo;你愿意上耶路撒冷去，在那里为这些事听审吗？&rsquo;<sup class="versenum">21&nbsp;</sup>但<u class="person underline">保罗</u>求我留下他，要听皇上审断，我就吩咐把他留下，等我解他到恺撒那里去。&rdquo;<sup class="versenum">22&nbsp;</sup><u class="person underline">亚基帕</u>对<u class="person underline">非斯都</u>说：&ldquo;我自己也愿听这人辩论。&rdquo;<u class="person underline">非斯都</u>说：&ldquo;明天你可以听。&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>第二天，<u class="person underline">亚基帕</u>和<u class="person underline">百妮基</u>大张威势而来，同着众千夫长和城里的尊贵人进了公厅。<u class="person underline">非斯都</u>吩咐一声，就有人将<u class="person underline">保罗</u>带进来。<sup class="versenum">24&nbsp;</sup><u class="person underline">非斯都</u>说：&ldquo;<u class="person underline">亚基帕</u>王和在这里的诸位啊，你们看这人，就是一切犹太人在耶路撒冷和这里曾向我恳求、呼叫说：&lsquo;不可容他再活着！&rsquo;<sup class="versenum">25&nbsp;</sup>但我查明他没有犯什么该死的罪，并且他自己上告于皇帝，所以我定意把他解去。<sup class="versenum">26&nbsp;</sup>论到这人，我没有确实的事可以奏明主上。因此，我带他到你们面前，也特意带他到你<u class="person underline">亚基帕</u>王面前，为要在查问之后有所陈奏。<sup class="versenum">27&nbsp;</sup>据我看来，解送囚犯不指明他的罪案是不合理的。&rdquo;</p>

<h3>保罗在亚基帕前为自己分诉</h3>

<p><sup class="versenum">1 </sup><u class="person underline">亚基帕</u>对<u class="person underline">保罗</u>说：&ldquo;准你为自己辩明。&rdquo;于是<u class="person underline">保罗</u>伸手分诉说：<sup class="versenum">2&nbsp;</sup>&ldquo;<u class="person underline">亚基帕</u>王啊，犹太人所告我的一切事，今日得在你面前分诉，实为万幸。<sup class="versenum">3&nbsp;</sup>更可幸的是，你熟悉犹太人的规矩和他们的辩论。所以，求你耐心听我。<sup class="versenum">4&nbsp;</sup>我从起初在本国的民中，并在耶路撒冷，自幼为人如何，犹太人都知道。<sup class="versenum">5&nbsp;</sup>他们若肯作见证，就晓得我从起初是按着我们教中最严紧的教门做了法利赛人。<sup class="versenum">6&nbsp;</sup>现在我站在这里受审，是因为指望神向我们祖宗所应许的。<sup class="versenum">7&nbsp;</sup>这应许，我们十二个支派昼夜切切地侍奉神，都指望得着。王啊，我被犹太人控告，就是因这指望。<sup class="versenum">8&nbsp;</sup>神叫死人复活，你们为什么看做不可信的呢？<sup class="versenum">9&nbsp;</sup>从前我自己以为应当多方攻击拿撒勒人耶稣的名，<sup class="versenum">10&nbsp;</sup>我在耶路撒冷也曾这样行了。既从祭司长得了权柄，我就把许多圣徒囚在监里；他们被杀，我也出名定案。<sup class="versenum">11&nbsp;</sup>在各会堂，我屡次用刑强逼他们说亵渎的话，又分外恼恨他们，甚至追逼他们，直到外邦的城邑。<sup class="versenum">12&nbsp;</sup>那时，我领了祭司长的权柄和命令，往大马士革去。<sup class="versenum">13&nbsp;</sup>王啊，我在路上，晌午的时候，看见从天发光，比日头还亮，四面照着我并与我同行的人。<sup class="versenum">14&nbsp;</sup>我们都仆倒在地，我就听见有声音用希伯来话向我说：&lsquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，为什么逼迫我？你用脚踢刺是难的。&rsquo;<sup class="versenum">15&nbsp;</sup>我说：&lsquo;主啊，你是谁？&rsquo;主说：&lsquo;我就是你所逼迫的耶稣。</p>

<h3>蒙派到外邦传道</h3>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;你起来站着！我特意向你显现，要派你做执事，作见证，将你所看见的事和我将要指示你的事证明出来。<sup class="versenum">17&nbsp;</sup>我也要救你脱离百姓和外邦人的手。<sup class="versenum">18&nbsp;</sup>我差你到他们那里去，要叫他们的眼睛得开，从黑暗中归向光明，从<u class="person underline">撒旦</u>权下归向神；又因信我，得蒙赦罪，和一切成圣的人同得基业。&rsquo;<sup class="versenum">19&nbsp;</sup><u class="person underline">亚基帕</u>王啊，我故此没有违背那从天上来的异象，<sup class="versenum">20&nbsp;</sup>先在大马士革，后在耶路撒冷和犹太全地，以及外邦，劝勉他们应当悔改归向神，行事与悔改的心相称。<sup class="versenum">21&nbsp;</sup>因此犹太人在殿里拿住我，想要杀我。<sup class="versenum">22&nbsp;</sup>然而我蒙神的帮助，直到今日还站得住，对着尊贵、卑贱、老幼作见证。所讲的并不外乎众先知和<u class="person underline">摩西</u>所说将来必成的事，<sup class="versenum">23&nbsp;</sup>就是基督必须受害，并且因从死里复活，要首先把光明的道传给百姓和外邦人。&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup><u class="person underline">保罗</u>这样分诉，<u class="person underline">非斯都</u>大声说：&ldquo;<u class="person underline">保罗</u>，你癫狂了吧！你的学问太大，反叫你癫狂了！&rdquo;<sup class="versenum">25&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;<u class="person underline">非斯都</u>大人，我不是癫狂，我说的乃是真实明白话。<sup class="versenum">26&nbsp;</sup>王也晓得这些事，所以我向王放胆直言；我深信这些事没有一件向王隐藏的，因都不是在背地里做的。<sup class="versenum">27&nbsp;</sup><u class="person underline">亚基帕</u>王啊，你信先知吗？我知道你是信的。&rdquo;<sup class="versenum">28&nbsp;</sup><u class="person underline">亚基帕</u>对<u class="person underline">保罗</u>说：&ldquo;你想稍微一劝，便叫我做基督徒啊？&rdquo;<sup class="versenum">29&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;无论是少劝是多劝，我向神所求的，不但你一个人，就是今天一切听我的，都要像我一样，只是不要像我有这些锁链。&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>于是，王和巡抚并<u class="person underline">百妮基</u>与同坐的人都起来，<sup class="versenum">31&nbsp;</sup>退到里面，彼此谈论说：&ldquo;这人并没有犯什么该死、该绑的罪。&rdquo;<sup class="versenum">32&nbsp;</sup><u class="person underline">亚基帕</u>又对<u class="person underline">非斯都</u>说：&ldquo;这人若没有上告于恺撒，就可以释放了。&rdquo;</p>
<!-- end bible --></div>

<p>所做的一样，司提反抓住为自己辩护的机会来传讲福音。司提反的讲道词很长，从对亚伯拉罕的呼召开始，记录了神是如何与犹太人交往的，也记录了犹太人是如何不断地悖逆神甚至反叛神。</p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒7:1-53》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒7:1-53</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>大祭司就说：&ldquo;这些事果然有吗？&rdquo;<sup>2</sup>司提反说：&ldquo;诸位父兄请听！当日我们的祖宗亚伯拉罕在美索不达米亚还未住哈兰的时候，荣耀的　神向他显现，<sup>3</sup>对他说：&lsquo;你要离开本地和亲族，往我所要指示你的地方去。&rsquo;<sup>4</sup>他就离开迦勒底人之地，住在哈兰。他父亲死了以后，　神使他从那里搬到你们现在所住之地。<sup>5</sup>在这地方　神并没有给他产业，连立足之地也没有给他；但应许要将这地赐给他和他的后裔为业。那时他还没有儿子。<sup>6</sup>神说：&lsquo;他的后裔必寄居外邦，那里的人要叫他们作奴仆，苦待他们四百年。&rsquo;<sup>7</sup>神又说：&lsquo;使他们作奴仆的那国，我要惩罚。以后他们要出来，在这地方事奉我。&rsquo;<sup>8</sup>神又赐他割礼的约。于是亚伯拉罕生了以撒，第八日给他行了割礼。以撒生雅各，雅各生十二位先祖。</p>

<p><sup>9</sup>先祖嫉妒约瑟，把他卖到埃及去。神却与他同在，<sup>10</sup>救他脱离一切苦难，又使他在埃及王法老面前得恩典，有智慧。法老就派他作埃及国的宰相兼管全家。<sup>11</sup>后来埃及和迦南全地遭遇饥荒，大受艰难，我们的祖宗就绝了粮。<sup>12</sup>雅各听见在埃及有粮，就打发我们的祖宗初次往那里去。<sup>13</sup>第二次约瑟与弟兄们相认，他的亲族也被法老知道了。<sup>14</sup>约瑟就打发弟兄请父亲雅各和全家七十五个人都来。<sup>15</sup>于是雅各下了埃及，后来他和我们的祖宗都死在那里；<sup>16</sup>又被带到示剑，葬于亚伯拉罕在示剑用银子从哈抹子孙买来的坟墓里。</p>

<p><sup>17</sup>及至　神应许亚伯拉罕的日期将到，以色列民在埃及兴盛众多，<sup>18</sup>直到有不晓得约瑟的新王兴起。<sup>19</sup>他用诡计待我们的宗族，苦害我们的祖宗，叫他们丢弃婴孩，使婴孩不能存活。</p>

<p><sup>20</sup>那时，摩西生下来，俊美非凡，在他父亲家里抚养了三个月。<sup>21</sup>他被丢弃的时候，法老的女儿拾了去，养为自己的儿子。<sup>22</sup>摩西学了埃及人一切的学问，说话行事都有才能。</p>

<p><sup>23</sup>他将到四十岁，心中起意，去看望他的弟兄以色列人。<sup>24</sup>到了那里，见他们一个人受冤屈，就护庇他，为那受欺压的人报仇，打死了那埃及人。<sup>25</sup>他以为弟兄必明白　神是藉他的手搭救他们，他们却不明白。<sup>26</sup>第二天，遇见两个以色列人争斗，就劝他们和睦，说：&lsquo;你们二位是弟兄，为甚么彼此欺负呢？&rsquo;<sup>27</sup>那欺负邻舍的把他推开说：&lsquo;谁立你作我们的首领和审判官呢？<sup>28</sup>难道你要杀我，像昨天杀那埃及人吗？&rsquo;<sup>29</sup>摩西听见这话就逃走了，寄居于米甸，在那里生了两个儿子。</p>

<p><sup>30</sup>过了四十年，在西奈山的旷野，有一位天使从荆棘火焰中向摩西显现。<sup>31</sup>摩西见了那异象，便觉希奇，正进前观看的时候，有主的声音说：<sup>32</sup>&lsquo;我是你列祖的　神，就是亚伯拉罕的　神，以撒的　神，雅各的　神。&rsquo;摩西战战兢兢，不敢观看。<sup>33</sup>主对他说：&lsquo;把你脚上的鞋脱下来，因为你所站之地是圣地。<sup>34</sup>我的百姓在埃及所受的困苦，我实在看见了；他们悲叹的声音，我也听见了。我下来要救他们。你来！我要差你往埃及去。&rsquo;</p>

<p><sup>35</sup>这摩西，就是百姓弃绝说&lsquo;谁立你作我们的首领和审判官&rsquo;的；神却藉那在荆棘中显现之使者的手，差派他作首领、作救赎的。<sup>36</sup>这人领百姓出来，在埃及，在红海，在旷野，四十年间行了奇事神迹。<sup>37</sup>那曾对以色列人说&lsquo;　神要从你们弟兄中间给你们兴起一位先知像我&rsquo;的，就是这位摩西。<sup>38</sup>这人曾在旷野会中和西奈山上与那对他说话的天使同在，又与我们的祖宗同在，并且领受活泼的圣言传给我们。</p>

<p><sup>39</sup>我们的祖宗不肯听从，反弃绝他，心里归向埃及，<sup>40</sup>对亚伦说：&lsquo;你且为我们造些神像，在我们前面引路；因为领我们出埃及地的那个摩西，我们不知道他遭了甚么事。&rsquo;<sup>41</sup>那时，他们造了一个牛犊，又拿祭物献给那像，欢喜自己手中的工作。<sup>42</sup>神就转脸不顾，任凭他们事奉天上的日月星辰，正如先知书上所写的说：&lsquo;以色列家啊，你们四十年间在旷野，岂是将牺牲和祭物献给我吗？<sup>43</sup>你们抬著摩洛的帐幕和理番神的星，就是你们所造、为要敬拜的像。因此，我要把你们迁到巴比伦外去。&rsquo;</p>

<p><sup>44</sup>我们的祖宗在旷野有法柜的帐幕，是　神吩咐摩西叫他照所看见的样式做的。<sup>45</sup>这帐幕，我们的祖宗相继承受。当　神在他们面前赶出外邦人去的时候，他们同约书亚把帐幕搬进承受为业之地，直存到大卫的日子。<sup>46</sup>大卫在　神面前蒙恩，祈求为雅各的　神预备居所；<sup>47</sup>却是所罗门为　神造成殿宇。<sup>48</sup>其实，至高者并不住人手所造的，就如先知所言：<sup>49</sup>&lsquo;主说：天是我的座位，地是我的脚凳，你们要为我造何等的殿宇？哪里是我安息的地方呢？<sup>50</sup>这一切不都是我手所造的吗？&rsquo;</p>

<p><sup>51</sup>你们这硬著颈项、心与耳未受割礼的人，常时抗拒圣灵；你们的祖宗怎样，你们也怎样！<sup>52</sup>哪一个先知不是你们祖宗逼迫呢？他们也把预先传说那义者要来的人杀了；如今你们又把那义者卖了、杀了。<sup>53</sup>你们受了天使所传的律法，竟不遵守。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/312.mp4" type="button" class="external-movie">
         观看&nbsp;徒7:1-53&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作？遇到什么难处？结果如何？</li>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">说希腊话的犹太人控告司提反，说他讲的话糟践圣所和摩西律法。针对这些指控，司提反用了旧约圣经中的故事来响应，而且都是宗教领袖所熟习的故事。他指出上帝的同在并不局限于地上的某一处。以色列的历史中，上帝从美索不达米亚一路直到埃及，都向以色列人显现。他甚至指出，上帝曾称为圣地的地方是在以色列之外！司提反的见证显示出上帝在以色列的历史中，不断对祂的子民采取行动：祂说话、祂差派、祂应许、祂惩罚、祂拯救。尽管上帝已经行动，以色列人却总是抗拒，甚至杀害祂所差来的先知。如今，上帝再次行动，差耶稣来到世上。司提反最后指出宗教领袖的罪：不服从上帝，陷害并杀死了弥赛亚耶稣。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒7:52</p>

<p class="forward bible">哪一个先知不是你们祖宗逼迫呢？他们也把预先传说那义者要来的人杀了；如今你们又把那义者卖了、杀了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你是如何看待司提反整体的回答和辩护？他为何重新叙述旧约的历史？</li>
	<li class="forward">满有圣灵和见证的人，也会遇见逼迫，但却不退缩。在不公义的团体压力下，司提反仍然作出美好见证。思想一下，我们如何在世俗的问题中，活出基督的能力与生命，而不会随波逐流。</li>
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
	<li class="forward">司提反被圣灵充满，不亢不卑地说话，从亚伯拉罕开始，把神的救赎计划详细说明，一直说到他们如何拒绝神，把圣者耶稣卖了，杀了。司提反忠忠实实地传讲神的道。
	<ul class="forward">
		<li class="forward">今天在世人和官长的面前受审，我们求圣灵赐我们当说的话，灵巧像蛇，驯良像鸽子。在人面前勇敢传说耶稣基督并祂的复活的福音。</li>
		<li class="forward">为世界各地正在受逼迫、受审问、被监禁的宣教士和神的仆人祷告，求神救他们脱离凶恶，不叫他们遇见试探。主的同在成为他们最大的安慰和力量。</li>
	</ul>
	</li>
	<li class="forward">在《信徒动员表》中写下2-3位你所知道最近因遇到一些事情而信心软弱，或是对信仰有疑惑的弟兄姐妹，为他们祷告。祈求天父借着圣灵使他们心里的力量刚强起来，开他们属灵的眼睛，真实体会基督长阔高深的爱。也求主耶稣使用你关怀和安慰他们，成为他们的属灵同伴，扶持和建立他们的属灵生命。</li>
	<li class="forward">在《福音行动表》列下那些目前还不认识神、甚至反对、取笑和攻击你信仰的家人或亲友并为他们祷告，求神开福音的门，刚强你的心，勇敢传讲基督福音。</li>
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

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为福音在各地开展，当地教会或是神的仆人所面对的困境和逼迫交托主前。为那些正在受逼迫、受审问、被监禁的宣教士和神的仆人祷告，求神救他们脱离凶恶，不叫他们遇见试探。主的同在成为他们最大的安慰和力量。</li>
	<li class="forward">求神赐教会的牧者、执事和同工在神的话语上下功夫，有神的聪明和智慧，在教导和传讲上有神的能力和信心，放胆讲说神的话，为真道竭力争辩。</li>
	<li class="forward">为每位基督徒花时间在神话语上扎根，渴慕神的话并真认识基督，在言语行为上活出基督及讨神的喜悦。</li>
	<li class="forward">分享教会或个人的代祷需要，最后请一位做结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->