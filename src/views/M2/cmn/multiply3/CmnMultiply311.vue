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
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>司提反被捕——扩展召逼迫</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒6:3-4</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>所以弟兄们，当从你们中间选出七个有好名声、被圣灵充满、智慧充足的人，我们就派他们管理这事。<sup class="versenum">4&nbsp;</sup>但我们要专心以祈祷、传道为事。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">我们是否相信主耶稣的复活，就决定我们如何过日子。如果我所信靠的是复活的主，又真又活的真神，我就有信心和盼望面对任何的情况。我们是信靠复活的救主，或是信靠物质、财物、地位、权力？我们若真的相信主耶稣复活，并见证主耶稣复活；我们的生命必定改变。纵然遇到任何困境和逼迫，坚定仰望神，相信祂掌权、祂知道、祂的美意必要成全！求主开我们的心窍，使我们能真认识祂，靠祂每天信心的生活，经历祂复活的大能和长阔高深的爱。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">从第4章开始，路加交替记述教会所遭遇的逼迫（<span class="popup-link" @click = "popUp('pop2')"> 徒4:1-31</span>；&nbsp;
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>彼得约翰被拿</h3>

	<p><sup class="versenum">1 </sup>使徒对百姓说话的时候，祭司们和守殿官并撒都该人忽然来了。<sup class="versenum">2&nbsp;</sup>因他们教训百姓，本着耶稣传说死人复活，就很烦恼，<sup class="versenum">3&nbsp;</sup>于是下手拿住他们。因为天已经晚了，就把他们押到第二天。<sup class="versenum">4&nbsp;</sup>但听道之人有许多信的，男丁数目约到五千。</p>

	<h3>到公会前被审</h3>

	<p><sup class="versenum">5&nbsp;</sup>第二天，官府、长老和文士在耶路撒冷聚会，<sup class="versenum">6&nbsp;</sup>又有大祭司<u class="person underline">亚那</u>和<u class="person underline">该亚法</u>、<u class="person underline">约翰</u>、<u class="person underline">亚历山大</u>，并大祭司的亲族都在那里，<sup class="versenum">7&nbsp;</sup>叫使徒站在当中，就问他们说：&ldquo;你们用什么能力，奉谁的名做这事呢？&rdquo;<sup class="versenum">8&nbsp;</sup>那时<u class="person underline">彼得</u>被圣灵充满，对他们说：<sup class="versenum">9&nbsp;</sup>&ldquo;治民的官府和长老啊，倘若今日因为在残疾人身上所行的善事，查问我们他是怎么得了痊愈，<sup class="versenum">10&nbsp;</sup>你们众人和以色列百姓都当知道：站在你们面前的这人得痊愈，是因你们所钉十字架、神叫他从死里复活的拿撒勒人耶稣基督的名。</p>

	<h3>除了耶稣别无拯救</h3>

	<p><sup class="versenum">11&nbsp;</sup>&ldquo;他是&lsquo;你们匠人所弃的石头，已成了房角的头块石头&rsquo;。<sup class="versenum">12&nbsp;</sup>除他以外，别无拯救，因为在天下人间，没有赐下别的名我们可以靠着得救。&rdquo;</p>

	<h3>恐吓而放</h3>

	<p><sup class="versenum">13&nbsp;</sup>他们见<u class="person underline">彼得</u>、<u class="person underline">约翰</u>的胆量，又看出他们原是没有学问的小民，就稀奇，认明他们是跟过耶稣的。<sup class="versenum">14&nbsp;</sup>又看见那治好了的人和他们一同站着，就无话可驳。<sup class="versenum">15&nbsp;</sup>于是吩咐他们从公会出去，就彼此商议说：<sup class="versenum">16&nbsp;</sup>&ldquo;我们当怎样办这两个人呢？因为他们诚然行了一件明显的神迹，凡住耶路撒冷的人都知道，我们也不能说没有。<sup class="versenum">17&nbsp;</sup>唯恐这事越发传扬在民间，我们必须恐吓他们，叫他们不再奉这名对人讲论。&rdquo;<sup class="versenum">18&nbsp;</sup>于是叫了他们来，禁止他们总不可奉耶稣的名讲论、教训人。<sup class="versenum">19&nbsp;</sup><u class="person underline">彼得</u>、<u class="person underline">约翰</u>说：&ldquo;听从你们不听从神，这在神面前合理不合理，你们自己酌量吧！<sup class="versenum">20&nbsp;</sup>我们所看见、所听见的，不能不说。&rdquo;<sup class="versenum">21&nbsp;</sup>官长为百姓的缘故，想不出法子刑罚他们，又恐吓一番，把他们释放了。这是因众人为所行的奇事都归荣耀于神。<sup class="versenum">22&nbsp;</sup>原来借着神迹医好的那人有四十多岁了。</p>

	<p><sup class="versenum">23&nbsp;</sup>二人既被释放，就到会友那里去，把祭司长和长老所说的话都告诉他们。<sup class="versenum">24&nbsp;</sup>他们听见了，就同心合意地高声向神说：&ldquo;主啊，你是造天、地、海和其中万物的！<sup class="versenum">25&nbsp;</sup>你曾借着圣灵，托你仆人&mdash;&mdash;我们祖宗<u class="person underline">大卫</u>的口说：&lsquo;外邦为什么争闹？万民为什么谋算虚妄的事？<sup class="versenum">26&nbsp;</sup>世上的君王一齐起来，臣宰也聚集，要抵挡主并主的受膏者。&rsquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">希律</u>和<u class="person underline">本丢</u>&middot;<u class="person underline">彼拉多</u>，外邦人和以色列民，果然在这城里聚集，要攻打你所膏的圣仆耶稣，<sup class="versenum">28&nbsp;</sup>成就你手和你意旨所预定必有的事。<sup class="versenum">29&nbsp;</sup>他们恐吓我们，现在求主鉴察，一面叫你仆人大放胆量讲你的道，<sup class="versenum">30&nbsp;</sup>一面伸出你的手来医治疾病，并且使神迹奇事因着你圣仆耶稣的名行出来。&rdquo;<sup class="versenum">31&nbsp;</sup>祷告完了，聚会的地方震动，他们就都被圣灵充满，放胆讲论神的道。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 徒5:12-42</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
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
	和基督徒群体内发生的事件（<span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup="">徒6:1-7）。 </span>

	<div class="popup invisible" id="pop5"><span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""><!-- begin bible --> </span>

	<p><span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""><sup class="versenum">1 </sup>那时，门徒增多，有说希腊话的犹太人向希伯来人发怨言，因为在天天的供给上忽略了他们的寡妇。<sup class="versenum">2&nbsp;</sup>十二使徒叫众门徒来，对他们说：&ldquo;我们撇下神的道去管理饭食，原是不合宜的。<sup class="versenum">3&nbsp;</sup>所以弟兄们，当从你们中间选出七个有好名声、被圣灵充满、智慧充足的人，我们就派他们管理这事。<sup class="versenum">4&nbsp;</sup>但我们要专心以祈祷、传道为事。&rdquo;<sup class="versenum">5&nbsp;</sup>大众都喜悦这话，就拣选了<u class="person underline">司提反</u>，乃是大有信心、圣灵充满的人；又拣选<u class="person underline">腓利</u>、<u class="person underline">伯罗哥罗</u>、<u class="person underline">尼迦挪</u>、<u class="person underline">提门</u>、<u class="person underline">巴米拿</u>，并进犹太教的安提阿人<u class="person underline">尼哥拉</u>。<sup class="versenum">6&nbsp;</sup>叫他们站在使徒面前，使徒祷告了，就按手在他们头上。</span></p>
	<span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""> </span>

	<p><span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""><sup class="versenum">7&nbsp;</sup>神的道兴旺起来，在耶路撒冷门徒数目加增的甚多，也有许多祭司信从了这道。</span></p>
	<span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""> <!-- end bible --></span></div>
	<span class="bible-link&gt;徒4:32-5:11&lt;/span&gt; data-cke-saved-href= ；&lt;a" javascript:popup=""> 在成长中的教会有外患，也有内忧，人数不断增加的教会出现了管理上的问题，十二位使徒聚集了所有门徒，公开地解决了这个难题，他们选出七位被圣灵充满并且有智慧的弟兄担任&ldquo;执事&rdquo;，使徒们则专注在祈祷和传道的事奉上。这个事件中也引出一位领袖&mdash;&mdash;司提反。而这位领袖却遭遇犹太人的诬告和迫害。</span></li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒6:8-15》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒6:8-15</button><div class="collapsed" id ="Text0">

<p><sup>8</sup>司提反满得恩惠能力，在民间行了大奇事和神迹。<sup>9</sup>当时有称利百地拿会堂的几个人，并有古利奈、亚历山太、基利家、亚西亚各处会堂的几个人，都起来和司提反辩论。<sup>10</sup>司提反是以智慧和圣灵说话，众人敌挡不住，<sup>11</sup>就买出人来说：&ldquo;我们听见他说谤讟摩西和　神的话。&rdquo;<sup>12</sup>他们又耸动了百姓、长老并文士，就忽然来捉拿他，把他带到公会去，<sup>13</sup>设下假见证说：&ldquo;这个人说话不住地糟践圣所和律法，<sup>14</sup>我们曾听见他说，这拿撒勒人耶稣要毁坏此地，也要改变摩西所交给我们的规条。&rdquo;<sup>15</sup>在公会里坐著的人都定睛看他，见他的面貌好像天使的面貌。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/311.mp4" type="button" class="external-movie">
         观看&nbsp;徒6:8-15&nbsp;</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">被拣选的七人当中，有一个人名叫司提反，他除了照顾寡妇以及管理教会资源外，也去说希腊话的犹太人会堂，向他们传福音。圣灵赐给司提反能力，使他行了许多神迹，并能以智能说话。这是圣经首次提到非使徒的门徒做了与使徒同样的工作。使徒将他们从耶稣身上学到的一切，传承下去，造就下一代的门徒。耶稣曾为使徒祈求，也为那些因他们的见证而相信的人祈求，如今这个祷告应验了（<span class="popup-link" @click = "popUp('pop6')"> 约17:20</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>&ldquo;我不但为这些人祈求，也为那些因他们的话信我的人祈求，</p>
	<!-- end bible --></div>
	司提反被捕的原因是起于神学上的争论，后来演变成这些人毁谤他（诬陷他），密谋要害他，最后动用武力。事实上，诬告司提反的罪名相当重大，和他们用来控告耶稣的罪名是一样的。尽管司提反处境危险，他的脸却映照出因耶稣同在而有的平安。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒6:10-11</p>

<p class="forward bible"><sup>10</sup>司提反是以智慧和圣灵说话，众人敌挡不住，<sup>11</sup>就买出人来说：&ldquo;我们听见他说谤讟摩西和神的话。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">对司提反的控告有那几项？控告有根据吗？我们对&ldquo;圣所和律法&rdquo;应该有怎样的看法？</li>
	<li class="forward">司提反的生命中有什么使你羡慕的吗？为什么？你是否认识什么人，有类似司提反某一方面的特质？</li>
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
	<li class="forward">反对的开始是因为司提反蒙神使用，大有能力。开始的时候还算客气。找几个有学问、有口才的人，和司提反公开辩论。目的是要把司提反驳倒，令他不敢再说话。司提反满有圣灵的充满，以智慧和圣灵说话。
	<ul class="forward">
		<li class="forward">面对有意的刁难或辩论，正确的回应是确定我们自己被圣灵充满，由圣灵指导我们说该说的话。记得，以智慧和圣灵说话，众人当然敌挡不住。</li>
	</ul>
	</li>
	<li class="forward">第一波的反对胜不了，敌人就发动第二波。第二波就买人造谣，作假见证，说：&ldquo;我们听见他说谤讟摩西和神的话。&rdquo;这是要鼓起群众的宗教热诚，使司提反成为群众的公敌。他们成功地鼓动群众的声势来反对他。他们又耸动了百姓、长老，并文士，就来捉拿他，把他带到公会去。他们的策略是把事情闹大，使官方非出面不可。
	<ul class="forward">
		<li class="forward">敌人不放弃，用群众和社会的势力，看似四面为敌，神却让大家都清楚看见&ldquo;司提反的面貌，好象天使的面貌&rdquo;（<span class="popup-link" @click = "popUp('pop7')"> 徒6:15</span>）。
		<div class="popup invisible" id="pop7"><!-- begin bible -->
		<p><sup class="versenum">15&nbsp;</sup>在公会里坐着的人都定睛看他，见他的面貌好像天使的面貌。</p>
		<!-- end bible --></div>
		祷告神使我们识破敌人的计谋，而我们能在神和人面前蒙恩宠有美名，神亲自成为我们的荣耀和盼望。</li>
	</ul>
	</li>
	<li class="forward">你觉得自己性格中有什么是你最不喜欢、最想改变的？司提反的生命对你有什么启发？哪些是你最需要耶稣改变你，以致你能更像基督，更被主使用？</li>
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
	<li class="forward">为福音在各地开展，当地教会或是神的仆人可能面对或正面对的逼迫祷告，求神保守教会的牧者和宣教士在面对有意的刁难和辩论时，有圣灵的指引，并被圣灵充满，由圣灵指教该说的话，满有神的荣光。</li>
	<li class="forward">求神赐智慧和属灵的洞察能力，使我们能以识破恶者和敌人的计谋、靠主抵挡得住并站立得稳，得以在神在人面前蒙恩宠有美名，而神亲自成为我们的荣耀和盼望。</li>
	<li class="forward">分享教会或个人代祷需要。</li>
	<li class="forward">最后请一位做结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->