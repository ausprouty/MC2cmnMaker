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
                        <div class="chapter_number ltr"><h1>34.</h1></div>
                        <div class="chapter_title ltr"><h1>会堂辩道策略——帖撒罗尼迦、庇哩亚</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒16:34</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>于是禁卒领他们上自己家里去，给他们摆上饭，他和全家因为信了神都很喜乐。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">保罗第二次宣教最大的贡献是福音正式进入欧洲，所以会有这个影响深远的结果，关键在于保罗回应了&ldquo;马其顿异象&rdquo;。保罗一行人原先有自己的宣教路线，却因顺服圣灵的引导改变行程，因而打开了欧洲宣教的大门。我们是否相信，当我们真诚地寻求神的旨意，神会引导我们的方向，可能出乎我们意料之外，但事后却发现有神的美意。圣灵不单会有积极的带领，还会有看似消极的&ldquo;禁止&rdquo;。主的工人不必担心主不记念他的工作，遇到&ldquo;禁止&rdquo;应该安息祷告等待，不可被工作本身吸引，却忽略了寻求策划和管理工作之神的旨意。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗一行人来到了马其顿省，他们去到的第一个地方是腓立比，妇人吕底亚受到保罗信息的感召，成了欧洲第一个信主的外邦人；接着，作者记下了一个戏剧化的事件，保罗行了一个赶鬼的神迹，因着这个神迹所引起的暴力行动，令他们不但遭到棍打，还被关进监狱里，然而在监狱里又发生了一个天摇地动的神迹，这个神迹导致了一个美好的结局，就是狱卒全家信主，而心恐再引起事端的官方则忙不迭地将保罗一行人送出城去。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒17:1-15》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒17:1-15</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>保罗和西拉经过暗妃坡里、亚波罗尼亚，来到帖撒罗尼迦，在那里有犹太人的会堂。<sup>2</sup>保罗照他素常的规矩进去，一连三个安息日，本着圣经与他们辩论，<sup>3</sup>讲解陈明基督必须受害，从死里复活；又说：&ldquo;我所传与你们的这位耶稣，就是基督。&rdquo;<sup>4</sup>他们中间有些人听了劝，就附从保罗和西拉，并有许多虔敬的希腊人，尊贵的妇女也不少。</p>

<p><sup>5</sup>但那不信的犹太人心里嫉妒，招聚了些市井匪类，搭伙成群，耸动合城的人闯进耶孙的家，要将保罗、西拉带到百姓那里。<sup>6</sup>找不着他们，就把耶孙和几个弟兄拉到地方官那里，喊叫说：&ldquo;那搅乱天下的也到这里来了！ <sup>7</sup>耶孙收留他们。这些人都违背凯撒的命令，说另有一个王耶稣。&rdquo;<sup>8</sup>众人和地方官听见这话，就惊慌了，<sup>9</sup>于是取了耶孙和其余之人的保状，就释放了他们。</p>

<p><sup>10</sup>弟兄们随即在夜间打发保罗和西拉往庇哩亚去。二人到了，就进入犹太人的会堂。<sup>11</sup>这地方的人贤于帖撒罗尼迦的人，甘心领受这道，天天考查圣经，要晓得这道是与不是。<sup>12</sup>所以他们中间多有相信的，又有希腊尊贵的妇女，男子也不少。</p>

<p><sup>13</sup>但帖撒罗尼迦的犹太人知道保罗又在庇哩亚传神的道，也就往那里去，耸动搅扰众人。<sup>14</sup>当时弟兄们便打发保罗往海边去；西拉和提摩太仍住在庇哩亚。<sup>15</sup>送保罗的人带他到了雅典，既领了保罗的命，叫西拉和提摩太速速到他这里来，就回去了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/334.mp4" type="button" class="external-movie">
         观看徒17:1-15</button>
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
	<li class="nobreak-final-final">保罗与其团队离开腓立比，去到地方首都帖撒罗尼迦。保罗继续到会堂找寻对属灵的事有渴慕的人。一些犹太人及许多希腊人，还有一些尊贵的妇女建立了教会。逼迫的发生常常是由于当地犹太领袖心生嫉妒而开始的。因为保罗等人被控告造成民间动乱，地方官长就叫在城里接待他们的耶孙缴交罚金（<span class="popup-link" @click = "popUp('pop2')"> 徒17:7-9</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup><u class="person underline">耶孙</u>收留他们！这些人都违背恺撒的命令，说另有一个王&mdash;&mdash;耶稣。&rdquo;<sup class="versenum">8&nbsp;</sup>众人和地方官听见这话，就惊慌了，<sup class="versenum">9&nbsp;</sup>于是取了<u class="person underline">耶孙</u>和其余之人的保状，就释放了他们。</p>
	<!-- end bible --></div>
	短短几个月后，保罗和他的团队被迫离开这个年轻的教会。然而，他们在马其顿的另一个城镇庇哩亚，继续建立教会的工作。我们从庇哩亚人身上学到，唯有上帝的话在我们生命中有最终的权威，因为他们查考圣经，要看看保罗教导的一切是否属实。这个新教会有许多庇哩亚的犹太人、又有希腊尊贵的妇女及许多希腊男子。帖撒罗尼迦那些充满敌意的犹太人一路追到庇哩亚，要强迫保罗离开马其顿。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒17:11</p>

<p class="forward bible">这地方的人贤于帖撒罗尼迦的人，甘心领受这道，天天考查圣经，要晓得这道是与不是。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">&ldquo;庇哩亚人贤于帖撒罗尼迦人&rdquo;，他们对圣经所表现的态度，对我们有什么提醒？为什么？</li>
	<li class="forward">综观保罗在腓立比、帖撒罗尼迦和庇哩亚这三个地方的宣教有什么相同的模式？从保罗一行人在各处的遭遇可看出，这段时期，宣教事工最大的拦阻是什么？这让我们对宣教拓展有什么新的看见和提醒呢？</li>
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
	<li class="forward">底哩亚的人很热烈要听保罗的讯息，便日日去听他。他们既有&ldquo;甘心领受这道&rdquo;的受教的心，认真查考圣经，要看看到底保罗说的是否与圣经相合。这是以神的话为根基的确信，而不只是对福音情感上的反应。结果不少人信了主，有犹太人，也有尊贵的希腊人男女。
	<ul class="forward">
		<li class="forward">反思你（或所造就的门徒）对神话语的态度和心志，是否稳定地读经和研经，并以神话语为生命的准则，改变你们的三观，活出神的话语？</li>
		<li class="forward">求神使用你在门徒造就上，帮助初信者扎根于神的话，不断被圣灵洁净和更新，满有基督的智慧与生命。</li>
		<li class="forward">祈求神让教会在福音行动中所接触的对象是渴慕神话语、是真实追求认识神、是神所所预备成熟的果子，能结出30、60甚至百倍的果子。</li>
	</ul>
	</li>
	<li class="forward">为教会的牧者，同工，主日学和倍增小组的老师和组长祷告，求神使用他们成为神话语的出口，认真研读并查考神的话，忠心牧养主的群羊。</li>
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

<p class="forward">满有慈爱怜悯的天父啊，我们的心切慕祢，如鹿切慕溪水；我们爱慕祢的话语，像才生的婴孩爱慕奶水一样。神啊，我们赞美祢！因为祢从来没有推却我们的祷告，从来没有将祢的慈爱离开我们，祢的应许从未改变，祢的恩典永远长存。我们感谢祢！因为我们无论遭遇任何环境，一切都有祢的美意，在顺境中，祢叫我们要懂得感恩；在逆境中，祢叫我们要懂得仰望。愿我们常在祢的慈爱与同在中，大大被祢赐福和使用，成为福音的出口，教会成为这地的祝福与荣耀。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->