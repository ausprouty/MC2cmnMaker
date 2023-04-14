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
                        <div class="chapter_number ltr"><h1>28.</h1></div>
                        <div class="chapter_title ltr"><h1>城镇行神迹宣教——城镇的宣教策略</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒14:3</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>二人在那里住了多日，倚靠主放胆讲道，主借他们的手施行神迹奇事，证明他的恩道。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">保罗和巴拿巴在以哥念犹太人的会堂里讲道，叫很多犹太人和希利尼人相信基督。但那不顺从的犹太人耸动外邦人，叫他们心里恼恨弟兄。所以城里的众人就分了党，有附从犹太人的，有附从使徒的。这是必然的现象，有相信的，也有不相信的，有服从的，也有反对的。反对的必然鼓动更多、更大的反对声势。圣经在这里用了&ldquo;逃&rdquo;这字，但他们逃得特别，不是逃走而躲藏起来。他们到了什么地方，却又在那里传福音。使徒因传福音遭迫害而需逃走，但他们逃到路司得、特庇时，却又继续传那会使他们再遭迫害而需再逃走的福音。到底是什么使他们肯这样做？</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">从以哥念向西南到&ldquo;路司得&rdquo;，只有30公里路司得。路司得是一座较小而且比较乡村化的城市，居民也比较朴实，教育程度也较差，也没有犹太会堂。保罗在路司得城医好了一个生来是瘸腿的，叫他跳起来行走。众人看见保罗所作的事，就用吕高尼的话大声说：&ldquo;有神借着人形降临在我们中间了。&rdquo;</p>

<p class="indent2">路司得有一个古代的传说。传说中希腊天神宙斯与希耳米曾乔装为人造访这里，他们敲遍千户的门寻求住宿但无人接待，最后来到城外一对贫穷老夫妇的茅屋， 这对老夫妇倾其所有款待他们。离去前宙斯将茅屋变成金碧辉煌的殿宇，设立两老为祭司，而摧毁了那千户不接待的人家。传说这两老不朽，化为庙前两棵老树，这就是城外宙斯庙的由来。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒14:8-20》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒14:8-20</button><div class="collapsed" id ="Text0">

<p><sup>8</sup>路司得城里坐著一个两脚无力的人，生来是瘸腿的，从来没有走过。<sup>9</sup>他听保罗讲道，保罗定睛看他，见他有信心，可得痊愈，<sup>10</sup>就大声说：&ldquo;你起来，两脚站直！&rdquo;那人就跳起来，而且行走。<sup>11</sup>众人看见保罗所做的事，就用吕高尼的话大声说：&ldquo;有神藉著人形降临在我们中间了！&rdquo; <sup>12</sup>于是称巴拿巴为宙斯 ，称保罗为希耳米，因为他说话领首。<sup>13</sup>有城外宙斯庙的祭司，牵著牛，拿著花圈来到门前，要同众人向使徒献祭。</p>

<p><sup>14</sup>巴拿巴、保罗二使徒听见，就撕开衣裳，跳进众人中间，喊著说：<sup>15</sup>&ldquo;诸君，为甚么做这事呢？我们也是人，性情和你们一样！我们传福音给你们，是叫你们离弃这些虚妄，归向那创造天、地、海和其中万物的永生　神。<sup>16</sup>他在从前的世代，任凭万国各行其道； <sup>17</sup>然而为自己未尝不显出证据来，就如常施恩惠，从天降雨，赏赐丰年，叫你们饮食饱足，满心喜乐。&rdquo; <sup>18</sup>二人说了这些话，仅仅地拦住众人不献祭与他们。</p>

<p><sup>19</sup>但有些犹太人从安提阿和以哥念来，挑唆众人，就用石头打保罗，以为他是死了，便拖到城外。<sup>20</sup>门徒正围著他，他就起来，走进城去。第二天，同巴拿巴往特庇去。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/328.mp4" type="button" class="external-movie">
         观看&nbsp;徒14:8-20&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">主的手如何借着门徒在这城中动工和带来影响？结果如何？</li>
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

	<li class="nobreak-final-final">不像其他的城市，路司特是一个较小的城镇，并没有会堂。居民从事本土的宗教活动，说的是当地的语言。如同耶稣和彼得医治瘸腿的人（<span class="popup-link" @click = "popUp('pop2')"> 太15:30-31</span>；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>有许多人到他那里，带着瘸子、瞎子、哑巴、有残疾的和好些别的病人，都放在他脚前，他就治好了他们。<sup class="versenum">31&nbsp;</sup>甚至众人都稀奇，因为看见哑巴说话、残疾的痊愈、瘸子行走、瞎子看见，他们就归荣耀给以色列的神。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 徒3:1-10</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>申初祷告的时候，<u class="person underline">彼得</u>、<u class="person underline">约翰</u>上圣殿去。<sup class="versenum">2&nbsp;</sup>有一个人，生来是瘸腿的，天天被人抬来，放在殿的一个门口&mdash;&mdash;那门名叫美门&mdash;&mdash;要求进殿的人周济。<sup class="versenum">3&nbsp;</sup>他看见<u class="person underline">彼得</u>、<u class="person underline">约翰</u>将要进殿，就求他们周济。<sup class="versenum">4&nbsp;</sup><u class="person underline">彼得</u>、<u class="person underline">约翰</u>定睛看他，<u class="person underline">彼得</u>说：&ldquo;你看我们！&rdquo;<sup class="versenum">5&nbsp;</sup>那人就留意看他们，指望得着什么。<sup class="versenum">6&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;金银我都没有，只把我所有的给你：我奉拿撒勒人耶稣基督的名，叫你起来行走！&rdquo;<sup class="versenum">7&nbsp;</sup>于是拉着他的右手，扶他起来。他的脚和踝子骨立刻健壮了，<sup class="versenum">8&nbsp;</sup>就跳起来站着，又行走，同他们进了殿，走着跳着，赞美神。<sup class="versenum">9&nbsp;</sup>百姓都看见他行走、赞美神，<sup class="versenum">10&nbsp;</sup>认得他是那素常坐在殿的美门口求周济的，就因他所遇着的事满心稀奇、惊讶。</p>
	<!-- end bible --></div>
	保罗也顺着圣灵的感动，医好一个生来是瘸腿的人。众人用他们的宗教解释这神迹，造成混淆。他们错把保罗和巴拿巴当作神明，然而还是有人相信他们所传的信息（<span class="popup-link" @click = "popUp('pop4')"> 徒14:20</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>门徒正围着他，他就起来，走进城去。第二天，同<u class="person underline">巴拿巴</u>往特庇去。</p>
	<!-- end bible --></div>
	即使保罗遭到猛烈的逼迫，他仍大胆地回到那城过夜。之后保罗写下这些话：&ldquo;不但如此， 凡立志在基督耶稣里敬虔度日的也都要受逼迫。&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 提后3:12</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>执事只要做一个妇人的丈夫，好好管理儿女和自己的家。</p>
	<!-- end bible --></div>
	再一次，保罗和巴拿巴必须离开，到下一个城镇去，他们在那里带了许多人信主。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒14:19-20</p>

<p class="forward bible"><sup>19</sup>但有些犹太人从安提阿和以哥念来，挑唆众人，就用石头打保罗，以为他是死了，便拖到城外。<sup>20</sup>门徒正围著他，他就起来，走进城去。第二天，同巴拿巴往特庇去。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">试分析一下保罗他们这次讲的内容与前章在安提阿讲的有何不同？ 另外在15-17节中保罗列举出关于神的哪些基本的真理？他怎样应用这些真理呢？比较 11、14、15 节。你想保罗今天会将这种信息传给谁呢？</li>
	<li class="forward">你曾学过或经历过什么有关在异乡、异文化宣教的情形？有什么需注意的？需做什么心前准备吗</li>
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
	<li class="forward">福音传到一个地方，接受与否，就造成两派。很强烈的对比：有人信，有人不信；不信的，就越来越不信；信的人，也可以在反对之下越信越坚定。在接受的人，就有了神人之间的和平；信徒彼此间也有和平；但在信与不信之间，就有人生观、价值观的冲突。因此：
	<ul class="forward">
		<li class="forward">我们传的是&ldquo;和平的福音&rdquo;，也是作神的和平之子。但福音所到之处，必然会有不同的反应。所以我们将结果交托给神，凡事存感恩的心。</li>
		<li class="forward">当人批评攻击我们时，求主帮助我们正确的看待此事，不是争辩、反驳，乃用神所赐的智慧以谦卑柔和的心回答众人，相信唯有神自己使人回转，我们只是神手中的器皿。</li>
		<li class="forward">在初信者成长过程中，我们需要花时间用神的话语来造就牧养他们，使圣经成为他们生活的准则，心思意念被神更新，能以察验何为神善良、纯全、可喜悦的旨意。</li>
	</ul>
	</li>
	<li class="forward">在教会/小组中提供《启动信徒》的训练，借着PCS在各自亲友关系网中为主作见证和领人归主。同时求神开福音的门，你或教会能以动员周边教会并提供培训，一起为主得着这个城市。</li>
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

<p class="forward">我们在天上的父，愿人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。我们祷告当基督的福音传到世人，人心愿意归向祢，并将当得的荣耀归给祢，因为祢是那创造天、地、海和其中万物的永生神。祢在从前的世代，任凭万国各行其道；然而为自己未尝不显出证据来，就如常施恩惠，从天降雨，赏赐丰年，叫世人饮食饱足，满心喜乐。愿世人的心眼被祢打开，心被柔软，归向祢这独一的真神。求主刚强祢的子民，靠祢站稳，放胆传讲神的道。求主坚固教会所做的工，在各地显明祢自己的作为来，主将得救的人数多多加给教会，奉主的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->