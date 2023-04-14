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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>圣灵清理假信徒——真实敬虔</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒4:13-14</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>他们见<u class="person underline">彼得</u>、<u class="person underline">约翰</u>的胆量，又看出他们原是没有学问的小民，就稀奇，认明他们是跟过耶稣的。<sup class="versenum">14&nbsp;</sup>又看见那治好了的人和他们一同站着，就无话可驳。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">彼得约翰原是没有学问的小民，竟然有这样的胆量，因为他们跟过耶稣，是耶稣带来改变。又看见那治好了的人和他们一同站着，这是驳不倒的事实（<span class="popup-link" @click = "popUp('pop2')"> 徒4:13-14</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>他们见<u class="person underline">彼得</u>、<u class="person underline">约翰</u>的胆量，又看出他们原是没有学问的小民，就稀奇，认明他们是跟过耶稣的。<sup class="versenum">14&nbsp;</sup>又看见那治好了的人和他们一同站着，就无话可驳。</p>
	<!-- end bible --></div>
	别人是否在我们身上看出我们是跟过耶稣的？我们身上是否有明显的改变？我们的见证是否是驳不倒的事实？我们若真的相信主耶稣复活，并见证主耶稣复活；我们的生命必定改变，我们必蒙大恩，众人也必因我们蒙大恩。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">彼得和约翰医治瘸腿乞丐的神迹传到了宗教领袖们的耳中，并恐吓他们不要再传讲基督。彼得约翰被释放后所作的第一件事，就是到教会那里去，把祭司长和长老所说的话都告诉他们。他们把问题带到教会，让教会分担。教会听见了，就同心合意地高声祷告。他们将问题交给神去处理。他们认定神是造天、地、海，和其中万物的主宰。神是最高的掌权者，也认清敌人攻击的对象是神自己。</p>

<p class="indent2">祷告完了，聚会的地方震动。神答应了他们的祷告！他们就都被圣灵充满，放胆讲论神的道。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒4:32-5:11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒4:32-5:11</button><div class="collapsed" id ="Text0">

<p><sup>32</sup>那许多信的人都是一心一意的，没有一人说他的东西有一样是自己，都是大家公用。<sup>33</sup>使徒大有能力，见证主耶稣复活，众人也都蒙大恩。<sup>34</sup>内中也没有一个缺乏的，因为人人将田产房屋都卖了，把所卖的价银拿来，<sup>35</sup>放在使徒脚前，照各人所需用的，分给各人。</p>

<p><sup>36</sup>有一个利未人，生在塞浦路斯，名叫约瑟，使徒称他为巴拿巴（巴拿巴翻出来就是劝慰子）。<sup>37</sup>他有田地也卖了，把价银拿来，放在使徒脚前。</p>

<p><sup>5</sup>:<sup>1</sup>有一个人，名叫亚拿尼亚，同他的妻子撒非喇卖了田产，<sup>2</sup>把价银私自留下几分，他的妻子也知道，其余的几分拿来放在使徒脚前。<sup>3</sup>彼得说：&ldquo;亚拿尼亚，为甚么撒但充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几分呢？<sup>4</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你作主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄　神了！&rdquo;</p>

<p><sup>5</sup>亚拿尼亚听见这话，就仆倒，断了气。听见的人都甚惧怕。<sup>6</sup>有些少年人起来，把他包裹，抬出去埋葬了。<sup>7</sup>约过了三小时，他的妻子进来，还不知道这事。<sup>8</sup>彼得对她说：&ldquo;你告诉我，你们卖田地的价银就是这些吗？&rdquo;她说：&ldquo;就是这些。&rdquo; <sup>9</sup>彼得说：&ldquo;你们为甚么同心试探主的灵呢？埋葬你丈夫之人的脚已到门口，他们也要把你抬出去。&rdquo;<sup>10</sup>妇人立刻仆倒在彼得脚前，断了气。那些少年人进来，见她已经死了，就抬出去，埋在她丈夫旁边。<sup>11</sup>全教会和听见这事的人都甚惧怕。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/308.mp4" type="button" class="external-movie">
         观看徒4:32-5:11</button>
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
	
	<li class="nobreak-final-final">信徒在爱中彼此相交，不但放胆分享信仰，也将自己的东西拿出来，照顾彼此的需要。我们看见一个生在塞浦路斯的人，名叫约瑟（又称巴拿巴），慷慨解囊，卖掉自己的田地，帮助教会里有需要的人。我们也看见一对夫妻怎样欺骗了教会，他们根本无心帮助贫困的人，所做的一切只是为了沽名钓誉，让其他信徒以为他们既慷慨又属灵。圣灵干预此事，不容许亚拿尼亚和撒非喇的伪善也发生在其他信徒身上。我们学到欺哄圣灵就是欺哄上帝，圣灵与上帝是同等的（<span class="popup-link" @click = "popUp('pop3')"> 徒5:3-4</span>）。
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">亚拿尼亚</u>，为什么<u class="person underline">撒旦</u>充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几份呢？<sup class="versenum">4&nbsp;</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你做主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄神了！&rdquo;</p>
	<!-- end bible --></div>
	尽管借着耶稣，我们能享有与神圣上帝之间的个人关系，然而此次不寻常的事件显示祂是施行审判的上帝，提醒信徒对上帝要有合宜的尊敬。当我们效法主的爱心，帮助有需要的人时，我们一定要诚实以待。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒5:3-4</p>

<p class="forward bible"><sup>3</sup>彼得说：&ldquo;亚拿尼亚，为甚么撒但充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几分呢？<sup>4</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你作主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄　神了！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们能从巴拿巴的行动学到什么榜样？从亚拿尼亚与撒非喇的态度，我们该如何来避免犯他们夫妻相同的罪？</li>
	<li class="forward">为何路加记载这件在初期教会极其不光彩的事情呢？透过这个故事我们能够学到什么宝贵的功课？教会在奉献的事上该如何行才讨神的喜悦，神的名也因此得着荣耀？</li>
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
	<li class="forward">亚拿尼亚和妻子撒非喇，卖了田产，把价银私自留下几分，却假装是完全的奉献。不是完全的奉献，却假装是完全的奉献，就是作假。作假就是欺骗。把信仰表面化，有外表的假象，却没有内在的真实，就是作假。让我们也省察自己：
	<ul class="forward">
		<li class="forward">是否假装敬虔、假装爱心、假装顺服、假装饶恕？信仰是真实的或是作假的？</li>
		<li class="forward">我相信神是监察人心的主吗？若是为主摆上为主做，我信神会记念和赐福？</li>
		<li class="indent">基督是教会的头，祂必用圣道洁净我们和教会，我信教会最终要向神交账？</li>
	</ul>
	</li>
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


<p class="indent3"><strong>祷告：</strong>我们祈求圣灵炼净教会，让我们在神面前和众人面前的奉献和摆上是真实的，为主所悦纳的，能更好的为主所用，祝福多人。</p>

<ul class="forward">
	<li class="forward">人看外表，所以我们可以用外在的表现欺哄人。但神却看内心，所以我们不可能用外在的表现来欺哄神。神能看穿我们外在的表现，看我们里面是否真的信靠他、爱他。
	<ul class="forward">
		<li class="forward">求神监察你我的内心，若有得罪神的地方，求神来赦免。让我们在神面前活出真实的虔诚，使我们为主摆上和服事的，都蒙神悦纳。</li>
		<li class="forward">留意教会的需要并参与奉献，一起建立神的家。另外，与小组成员主动帮助教会内有需要的人，给予协助，在爱中彼此相顾。</li>
	</ul>
	</li>
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

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


<h2 class="forward">福音祷告</h2>

<p class="forward">亲爱的主，祢说忧伤痛悔的心祢必不轻看，我们为国家、为社会、为教会和为自己的光景，求祢的怜悯、恩惠，慈爱和宽容，使我们有悔改更新的机会，让我们体验主祢爱我们，而不是纵容我们去欺骗，去做虚谎的事情。主啊，让我们能够悔改，能有活的善良，公义，并效法耶稣基督。我们看到早期教会的软弱，但祢彰显了能力，使众信徒惧怕使徒。求祢让我们今天也有敬畏主耶稣的心，真诚的爱祢和彼此相爱，作智慧的好管家。感谢主垂听我们的祷告！奉主耶稣的圣名。阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->