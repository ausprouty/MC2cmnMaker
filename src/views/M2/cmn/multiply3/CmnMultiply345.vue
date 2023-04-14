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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>圣殿中辩解——耶路撒冷</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒21:35-36</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>到了台阶上，众人挤得凶猛，兵丁只得将<u class="person underline">保罗</u>抬起来。<sup class="versenum">36&nbsp;</sup>众人跟在后面，喊着说：&ldquo;除掉他！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">信徒被圣灵感动，预见将要面临的困苦，并不表示圣灵要我们回避那困境，要紧的是，要清楚知道主的旨意如何，一切当以&ldquo;愿主的旨意成就&rdquo;。主的旨意，不但是借着我们的平安顺利而得成就，许多时候更是借着我们的受苦与受难得以成就，因此问题不在于环境如何，乃在于我们是否有主清楚的带领。&ldquo;万事都互相效力，叫爱神的人得益处&rdquo;(<span class="popup-link" @click = "popUp('pop2')"> 罗8:28</span>)，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup>我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人。</p>
	<!-- end bible --></div>
	我们若是按着神的旨意行事，受苦也与我们有益。求主帮助我们有祂的心和属天的看见，在试炼中为我们开一条出路，真实经历祂的大能和同在。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">有一些从亚西亚来的犹太人始终紧抓着保罗不放，当保罗在圣殿中履行律法的要求时，他们当场喧闹保罗领外邦人进入圣殿，这个重大却不实的罪名果真引起众怒，险些使保罗丧命在群情激愤的暴力中，幸好罗马的千夫长及时赶到救下了保罗，促使这一场闹剧在群众的怒喊&ldquo;除掉他&rdquo;的声浪中暂时告一段落。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒21:37-22:21》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒21:37-22:21</button><div class="collapsed" id ="Text0">

<p><sup>21</sup>:<sup>37</sup>将要带他进营楼，保罗对千夫长说：&ldquo;我对你说句话，可以不可以？&rdquo;他说：&ldquo;你懂得希腊话吗？<sup>38</sup>你莫非是从前作乱、带领四千凶徒往旷野去的那埃及人 吗？&rdquo;<sup>39</sup>保罗说：&ldquo;我本是犹太人，生在基利家的大数，并不是无名小城的人。求你准我对百姓说话。&rdquo;<sup>40</sup>千夫长准了。保罗就站在台阶上，向百姓摆手，他们都静默无声，保罗便用希伯来话对他们说：</p>

<p><sup>22</sup>:<sup>1</sup>&ldquo;诸位父兄请听，我现在对你们分诉。&rdquo; <sup>2</sup>众人听他说的是希伯来话，就更加安静了。<sup>3</sup>保罗说：&ldquo;我原是犹太人，生在基利家的大数，长在这城里，在迦玛列门下，按着我们祖宗严紧的律法受教，热心事奉　神，像你们众人今日一样。<sup>4</sup>我也曾逼迫奉这道的人直到死地，无论男女都锁拿下监。<sup>5</sup>这是大祭司和众长老都可以给我作见证的。我又领了他们达与弟兄的书信，往大马士革去，要把在那里奉这道的人锁拿，带到耶路撒冷受刑。</p>

<p><sup>6</sup>我将到大马士革，正走的时候，约在晌午，忽然从天上发大光，四面照着我。<sup>7</sup>我就仆倒在地，听见有声音对我说：&lsquo;扫罗，扫罗！你为甚么逼迫我？&rsquo;<sup>8</sup>我回答说：&lsquo;主啊，你是谁？&rsquo;他说：&lsquo;我就是你所逼迫的拿撒勒人耶稣。&rsquo;<sup>9</sup>与我同行的人看见了那光，却没有听明那位对我说话的声音。<sup>10</sup>我说：&lsquo;主啊，我当做甚么？&rsquo;主说：&lsquo;起来！进大马士革去，在那里，要将所派你做的一切事告诉你。&rsquo;<sup>11</sup>我因那光的荣耀不能看见，同行的人就拉着我手进了大马士革。</p>

<p><sup>12</sup>那里有一个人，名叫亚拿尼亚，按着律法是虔诚人，为一切住在那里的犹太人所称赞。<sup>13</sup>他来见我，站在旁边对我说：&lsquo;兄弟扫罗，你可以看见。&rsquo;我当时往上一看，就看见了他。<sup>14</sup>他又说：&lsquo;我们祖宗的　神拣选了你，叫你明白他的旨意，又得见那义者，听他口中所出的声音。<sup>15</sup>因为你要将所看见的、所听见的对着万人为他作见证。<sup>16</sup>现在你为甚么耽延呢？起来！求告他的名受洗，洗去你的罪。&rsquo;&rdquo;</p>

<p><sup>17</sup>后来，我回到耶路撒冷，在殿里祷告的时候，魂游象外，<sup>18</sup>看见主向我说：&lsquo;你赶紧地离开耶路撒冷，不可迟延，因你为我作的见证，这里的人必不领受。&rsquo;<sup>19</sup>我就说：&lsquo;主啊，他们知道我从前把信你的人收在监里，又在各会堂里鞭打他们。<sup>20</sup>并且你的见证人司提反被害流血的时候，我也站在旁边欢喜，又看守害死他之人的衣裳。&rsquo;<sup>21</sup>主向我说：&lsquo;你去吧！我要差你远远地往外邦人那里去。&rsquo;&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/345.mp4" type="button" class="external-movie">
         观看&nbsp;徒21:37-22:21&nbsp;</button>
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
	<li class="nobreak-final-final">主透过保罗在大数的生活，已经为这一刻做好了准备，包括受希腊化的教育，和成为犹太教法师的训练。这是《使徒行传》的作者路加第一次记录保罗分享自己的见证。保罗告诉罗马的教会他不以福音为耻（<span class="popup-link" @click = "popUp('pop3')"> 罗1:16</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>我不以福音为耻，这福音本是神的大能，要救一切相信的，先是犹太人，后是希腊人。</p>
	<!-- end bible --></div>
	并且不管环境如何，他仍要继续传讲福音。保罗藉此机会向同胞作见证，他分享自己遇见耶稣之前的生活、他如何遇见耶稣、耶稣如何改变他的生命，以及他的使命。之后，保罗劝勉新一代的领袖提摩太和提多，要他们随时把握机会分享对耶稣的认识和经历（<span class="popup-link" @click = "popUp('pop7')"> 多3:1</span>；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>你要提醒众人，叫他们顺服做官的、掌权的，遵他的命，预备行各样的善事。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 提后4:2</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>这是因为说谎之人的假冒，这等人的良心如同被热铁烙惯了一般。</p>
	<!-- end bible --></div>
	从保罗的个人见证我们学到，早期教会的信徒无论男女皆因信耶稣而受苦（<span class="popup-link" @click = "popUp('pop6')"> 徒22:4</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>我也曾逼迫奉这道的人，直到死地，无论男女都锁拿下监。</p>
	<!-- end bible --></div>
	上帝要邀请所有人藉由耶稣经历到祂的爱和赦免，而不是藉由犹太人的宗教礼仪。犹太人却一再被这个思想所绊倒。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒21:40</p>

<p class="forward bible">千夫长准了。保罗就站在台阶上，向百姓摆手，他们都静默无声，保罗便用希伯来话对他们说：</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">当保罗在前往大马色的路上遇见了生命的真光耶稣时，保罗的生命得到了更新，而如今成为宣教士的保罗向他的同胞见证这光时，却遭到了犹太人强烈的拒绝，他们自以为的宗教敬虔和维护传统的热心蒙蔽了他们的眼目。</li>
</ul>

<p class="indent2">在我们的教会生活中， 什么是我们的传统？当有人看到传统需要修正时，我们是否会为了守护传统而错失了真理，把不能负的轭加在其他人身上？</p>

<ul class="forward">
	<li class="forward">信主前，你最热衷于的目标是什么？你现在怎么看当时的热忱？当年，耶稣基督付予保罗的使命是&ldquo;你要将所看见的，所听见的， 对着万人为主作见证&rdquo;；这对今日基督徒的我们有什么提醒？</li>
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
	<li class="forward">针对一个特定的群体和机会作为你分享信主见证的对象，本周花时间完善你的见证，并祷告神使用你的个人故事来见证祂的大能和作为。</li>
	<li class="forward">本周与门徒或是属灵同伴找时间向一个陌生的群体传福音，求主预备合适的人，并把你们带到他们当中。另外，求神使用你们动员其他教会牧者或小组，一起借着祷告、奉献或短宣认领一个未得之民的宣教事工。</li>
	<li class="forward">为教会的牧者同工，并教会所开展的福音事工祷告，求主保守大家无论在任何境况和处境都靠主常喜乐，顺着圣灵的引领，主预备和平之子，并将福音传开。</li>
	<li class="forward">阅读附录：《宣教士：杨格非》，把阅读心得和反思写下，下周分享。</li>
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

<p class="forward">亲爱的天父，我们从前是远离祢的人，如今却在基督耶稣里，靠着祂的血，已经得亲近了。如今我们不再作外人和客旅，是与圣徒同国，是神家里的人，并且被建造在使徒和先知的根基上，有基督耶稣自己为房角石。天父啊，我们深信祢能照着运行在我们心里的大力，充充足足地成就一切，超过我们所求所想。求主保守祢的众儿女，无论在任何境况，都以为大喜乐，因为知道信心经过试炼，就生忍耐，最终使我们成全完备，毫无缺乏。但愿祢在教会中，并在基督耶稣里，得着荣耀，直到世世代代，永永远远。阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->