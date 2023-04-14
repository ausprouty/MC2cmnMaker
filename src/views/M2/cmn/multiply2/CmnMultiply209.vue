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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>一个真实的家庭</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约1:45</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">45&nbsp;</sup><u class="person underline">腓力</u>找着<u class="person underline">拿但业</u>，对他说：&ldquo;<u class="person underline">摩西</u>在律法上所写的和众先知所记的那一位，我们遇见了，就是<u class="person underline">约瑟</u>的儿子拿撒勒人耶稣。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>上帝改变人的生命来荣耀祂。因着与基督之间的新关系，让门徒坚定信靠祂，并为祂作见证。尽管遭受逼迫，他们仍继续向人传福音、训练门徒。今天神也要改变我们的生命，并使用我们，在我们所在的地方，甚至到各地去得人，使多人作祂的门徒。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣最早期的门徒安得烈、彼得、腓力、拿但业以及约翰（虽然未直接提到他的名字）遇见了耶稣，他们就跟从了祂。这一小群门徒跟着耶稣从犹大地来到了加利利的迦拿，他们受邀参加了一个犹太家庭的婚宴，耶稣的母亲也在那里。作者约翰以一个&ldquo;变水为酒&rdquo;的神迹作为耶稣公开事奉的序幕别有深意，因为旧约经常以婚宴来呈现弥赛亚国度的欢乐，耶稣在婚宴中所行变水为酒的神迹正是在向世人宣告：上帝已经来到我们当中，祂要用新的方式更新我们的生命，除掉一切妨碍我们和祂相交的旧有的礼仪形式。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音2:1-12》两遍。。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音2:1-12</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>第三日，在加利利的迦拿有娶亲的筵席，耶稣的母亲在那里。<sup>2</sup>耶稣和他的门徒也被请去赴席。<sup>3</sup>酒用尽了，耶稣的母亲对他说：&ldquo;他们没有酒了。&rdquo;<sup>4</sup>耶稣说：&ldquo;母亲（注：原文作&ldquo;妇人&rdquo;），我与你有什么相干？我的时候还没有到。&rdquo;<sup>5</sup>他母亲对用人说：&ldquo;他告诉你们什么，你们就做什么。&rdquo;<sup>6</sup>照犹太人洁净的规矩，有六口石缸摆在那里，每口可以盛两三桶水。<sup>7</sup>耶稣对用人说：&ldquo;把缸倒满了水。&rdquo;他们就倒满了，直到缸口。<sup>8</sup>耶稣又说：&ldquo;现在可以舀出来，送给管筵席的。&rdquo;他们就送了去。<sup>9</sup>管筵席的尝了那水变的酒，并不知道是哪里来的，只有舀水的用人知道。管筵席的便叫新郎来，<sup>10</sup>对他说：&ldquo;人都是先摆上好酒，等客喝足了，才摆上次的；你倒把好酒留到如今！&rdquo;<sup>11</sup>这是耶稣所行的头一件神迹，是在加利利的迦拿行的，显出他的荣耀来，他的门徒就信他了。<sup>12</sup>这事以后，耶稣与他的母亲、弟兄和门徒都下迦百农去，在那里住了不多几日。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/209.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音2:1-12&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ （约2:4）&ldquo;母亲，我与你有什么相干？&rdquo;&nbsp;</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">耶稣用这句话清楚表达祂的主权不受制于任何人。 &ldquo;母亲&rdquo;的希腊文&ldquo;妇人&rdquo;在犹太文化中没有不敬的意思，但却并非儿子用来称呼母亲的用语，耶稣使用这个字可能有特别的含意，耶稣有意在祂和马利亚之间保持距离（参<span class="popup-link" @click = "popUp('pop2')"> 马太福音12:46-50</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">46&nbsp;</sup>耶稣还对众人说话的时候，不料他母亲和他弟兄站在外边，要与他说话。<sup class="versenum">47&nbsp;</sup>有人告诉他说：&ldquo;看哪，你母亲和你弟兄站在外边，要与你说话。&rdquo;<sup class="versenum">48&nbsp;</sup>他却回答那人说：&ldquo;谁是我的母亲？谁是我的弟兄？&rdquo;<sup class="versenum">49&nbsp;</sup>就伸手指着门徒说：&ldquo;看哪，我的母亲，我的弟兄！<sup class="versenum">50&nbsp;</sup>凡遵行我天父旨意的人，就是我的弟兄、姐妹和母亲了。&rdquo;</p>
	<!-- end bible --></div>
	因为祂已开始公开事奉，祂和母亲之间必须有一种新的关系，祂必须淡化在肉身上为马利亚儿子的身分，因为祂真正的身份是弥赛亚，是上帝的儿子。&ldquo;时候&rdquo;的希腊文是 hora，在约翰福音中有特别的神学意义，最常用来指耶稣在十字架上受死、复活、得高举的&ldquo;时候&rdquo;。不过此处的&ldquo;时候&rdquo;也有可能是耶稣在说弥赛亚时代，酒水充盈的时候还没有来到。</li>
</ul>

<p>( &nbsp;注解取自 http://ocochome.info/wp-content/uploads/2016/10/John-03-YihsinCTing.pdf)</p>

</div>

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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣是一个真实的人，有真实的家庭，来自以色列一个真实的小镇。门徒见到祂的家庭，也从祂的第一个神迹&ldquo;变水为酒&rdquo;，看见祂的神性和荣耀。耶稣以变水为酒的神迹和洁净圣殿的行动宣告救恩的新纪元已经来到。当门徒越发认识和经历耶稣时，信心也跟着成长。耶稣建立这群初代门徒是透过：叫他们来看，花时间和他们在一起，他们告诉其他人有关耶稣的真理，亲眼见到祂的神性与人性，来造就他们的生命。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">约2:11</p>

<p class="forward bible">这是耶稣所行的头一件神迹，是在加利利的迦拿行的，显出他的荣耀来，他的门徒就信他了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">宗教仪式和行为能带给人有限度的安全感，却不能完全满足人心的需要。不管我们生命中有多大的缺憾或相当的满足，在耶稣里的新生命和新生活能超过我们所想望的，请分享&ldquo;信耶稣&rdquo;带给你最大的改变是什么？</li>
	<li class="forward">你是否遇过进退两难，彷徨失措的困境，当时你第一个反应是什么？在那件事上你学习到什么？或是你有经历神吗？为什么？</li>
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
	<li class="forward">从《福音行动表》中选出2人，本周与他们分享&ldquo;奇妙的问题&rdquo;，并记得跟进上周分享对象的状况，观察神动工的进度。</li>
	<li class="forward">最近生活、或事业、或课业、或家庭上是否遇到难处？请把他写下，除了祷告交托，你想有哪些行动和责任是你当尽的，并留意神动工的痕迹，与神同工。</li>
	<li class="forward">为教会的全职工人、服事人员、开支费用、福音及宣教事工等需要向神祷告，求主供应。你也主动有份参与服事和奉献，一起见证神在教会的作为与供应。</li>
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
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p>使无变为有的神，在祢没有难成的事，信靠祢的，必能在祢里面得着满足和信心。天父啊，当我在彷徨失措的时候，求祢开我的心眼，让我看见在祢必有预备，我只要单单按祢的心意而行，讨祢的喜悦。求祢帮助我，在家人、亲友、教会、职场和小区的面前能够蒙恩宠有美名；在自己的岗位上尽忠，发挥最大的影响力，荣耀祢的名。感恩祷告是奉主耶稣基督的圣名，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->