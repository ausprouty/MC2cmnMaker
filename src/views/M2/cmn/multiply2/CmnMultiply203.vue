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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>幼儿耶稣</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约1:14</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>《马太福音》指出耶稣正是以色列众人期待已久的君王弥赛亚，以及耶稣带来的国度，实现了神的救赎计划，激励基督徒要满怀感恩地忠心服侍，努力拓展神的国度。作者马太最初写作对象是犹太人，所以《马太福音》有较强的犹太背景，全书引用旧约共计129 次。耶稣就是旧约应验的弥赛亚，祂降世为人，为要拯救罪人。有耳可听的，都应当听，并就近这位赐人生命的耶稣。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣肉身的父母原是住在加利利的拿撒勒，但在罗马皇帝<u>凯撒</u>的时候下了一个以前没有，以后也没下过的命令。他要所有的人都回到自己的本地本乡去报名上册。所以，属于犹大支派的约瑟带着身孕已重的马利亚前往伯利恒，耶稣因此降生在伯利恒。耶稣降生时有天使报喜信，并牧羊人来拜祂。满八天给耶稣行割礼，并上圣殿行洁净礼</span><span lang="EN-US"> (</span><span lang="ZH-CN">参路加福音第二章</span><span lang="EN-US">)</span><span lang="ZH-CN">。马太福音记载东方博士来拜耶稣应是在他们要回加利利时所发生的事，那时主耶稣大概是一岁左右，所以，<u>希律</u>王才会下令要杀两岁以内的孩童</span><span lang="EN-US">(</span><span class="popup-link" @click = "popUp('pop2')"> 太2:16</span></span></span>)<span lang="ZH-CN">。</span><span><span> </span></span></p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup><u class="person underline">希律</u>见自己被博士愚弄，就大大发怒，差人将伯利恒城里并四境所有的男孩，照着他向博士仔细查问的时候，凡两岁以里的都杀尽了。</p>
<!-- end bible --></div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音2:1-18》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音2:1-18</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>当希律王的时候，耶稣生在犹太的伯利恒。有几个博士从东方来到耶路撒冷，说：<sup>2</sup>&ldquo;那生下来作犹太人之王的在哪里？我们在东方看见他的星，特来拜他。&rdquo;<sup>3</sup>希律王听见了，就心里不安；耶路撒冷合城的人也都不安。<sup>4</sup>他就召齐了祭司长和民间的文士，问他们说：&ldquo;基督当生在何处？&rdquo;<sup>5</sup>他们回答说：&ldquo;在犹太的伯利恒。因为有先知记着说：<sup>6</sup>&lsquo;犹大地的伯利恒啊，你在犹大诸城中并不是最小的，因为将来有一位君王要从你那里出来，牧养我以色列民。&rsquo;&rdquo;</p>

<p><sup>7</sup>当下希律暗暗地召了博士来，细问那星是什么时候出现的，<sup>8</sup>就差他们往伯利恒去，说：&ldquo;你们去仔细寻访那小孩子，寻到了，就来报信，我也好去拜他。&rdquo;<sup>9</sup>他们听见王的话就去了。在东方所看见的那星，忽然在他们前头行，直行到小孩子的地方，就在上头停住了。<sup>10</sup>他们看见那星，就大大地欢喜。<sup>11</sup>进了房子，看见小孩子和他母亲马利亚，就俯伏拜那小孩子，揭开宝盒，拿黄金、乳香、没药为礼物献给他。<sup>12</sup>博士因为在梦中被主指示，不要回去见希律，就从别的路回本地去了。</p>

<p><sup>13</sup>他们去后，有主的使者向约瑟梦中显现，说：&ldquo;起来！带着小孩子同他母亲逃往埃及，住在那里，等我吩咐你，因为希律必寻找小孩子，要除灭他。&rdquo;<sup>14</sup>约瑟就起来，夜间带着小孩子和他母亲往埃及去，<sup>15</sup>住在那里，直到希律死了。这是要应验主藉先知所说的话，说：&ldquo;我从埃及召出我的儿子来。&rdquo;<sup>16</sup>希律见自己被博士愚弄，就大大发怒，差人将伯利恒城里并四境所有的男孩，照着他向博士仔细查问的时候，凡两岁以里的，都杀尽了。<sup>17</sup>这就应了先知杰里迈亚的话，说：<sup>18</sup>&ldquo;在拉玛听见号啕大哭的声音，是拉结哭她儿女，不肯受安慰，因为他们都不在了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/203.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音2:1-18&nbsp;</button>
    <div class="collapsed"></div>

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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣降生后，上帝透过外邦（非犹太人) 的星象学家供应这个家庭的需要。他们献的礼物可能用来帮助耶稣的家前往埃及。天父供应儿子耶稣一切的需要；也供应祂儿女一切的需要。有时候供应出现在需要的前一晚，或是前几天；有时候在你凭信心跟着上帝往前行时。另外，强权君王希律与贫弱婴孩耶稣的对峙如何结尾，提醒我们这个世界之上统管万有的真正的王是上帝。旧约先知的多处预言告诉我们上帝的永恒救赎计划早在历史中开始。耶稣一家在神旨意中的行动，特别是约瑟对上帝的启示的态度，让我们反思自己如何行在神旨意中。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太2:10-11</p>

<p class="forward bible"><sup>10</sup>他们（博士们）看见那星，就大大地欢喜。<sup>11</sup>进了房子，看见小孩子和他母亲马利亚，就俯伏拜那小孩子，揭开宝盒，拿黄金、乳香、没药为礼物献给他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">当政治领袖希律对君王耶稣赶尽杀绝，神保护孩儿的耶稣脱离危险。当我们教会面对当下逼迫时，我们是否相信神在掌权，祂是掌管历史的主？教会当如何面对现在的环境，能够屹立不倒？</li>
	<li class="forward">我们要如何学习东方博士和约瑟的谦卑顺服，随时察验神的心意？如何让基督耶稣在我们的生命中作王或在我们教会中居首位？</li>
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
	<li class="forward">主动关心并坚定2-3位弟兄姊妹的信心，动员他们继续参与教会的祷告会和小组，一同寻求神的旨意，在神话语上成长，并为国家和执政的守望，以察验神在地上的作为。</li>
	<li class="forward">向牧者同工了解教会事工的需要，并以祷告和金钱奉献支持。同时留意观察身边有需要的人，主动为他们祷告并实际满足他们的需要。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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

<p>亲爱的天父，我们感谢赞美祢。谢谢祢借着主耶稣的降生，让我们看到东方博士和约瑟的谦卑顺服；我们也看到有些人是对主有知识却一点也不渴慕；我们更看到那敌挡神的诡诈与逼迫。但我们依然相信神掌管着一切，带领我们前行。求主帮助我们，让我们有颗谦卑顺服的心，时刻让君王耶稣在我们生命的宝座上作主，好让我们越来越像主自己。谢谢主垂听我们的祷告，奉主耶稣宝贵的圣名求。阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->