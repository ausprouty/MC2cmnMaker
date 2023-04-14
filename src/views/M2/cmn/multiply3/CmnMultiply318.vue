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
                        <div class="chapter_number ltr"><h1>18.</h1></div>
                        <div class="chapter_title ltr"><h1>彼得在耶城外传道——跨地域宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒9:15</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>主对<u class="person underline">亚拿尼亚</u>说：&ldquo;你只管去！他是我所拣选的器皿，要在外邦人和君王并以色列人面前宣扬我的名。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">扫罗在耶路撒冷与说希利尼话的犹太人讲论辩驳；他们却想法子要杀他。扫罗可能有能力将他们都驳倒，结果是他们要杀他。再一次证明不是靠智慧辩才，而是圣灵的工作方能成事。弟兄们知道了就送他下该撒利亚，打发他往大数去。大数是扫罗的家乡。扫罗最后一事无成，被打发回家乡大数。扫罗在大数的时间长达七至十年。这是耐心等候的日子，等候神在他身上完成雕琢的工作。直到<span class="popup-link" @click = "popUp('pop2')"> 使徒行传11:25</span>，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>他又往大数去找<u class="person underline">扫罗</u>，</p>
	<!-- end bible --></div>
	扫罗才再次出现，&ldquo;巴拿巴往大数去找扫罗，找着了，就带他到安提阿去。&rdquo;神愿意等待，直到器皿合用了，才使用他。我们是否愿意让神在我们身上作雕琢的工作，合乎主用？</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">路加在第九章前部分告诉我们关于大数的扫罗如何归主。他后来成为向外邦人传道的使徒；在32节开始笔锋又转回到彼得身上，彼得继续全力投入他的使徒事工，主要在海岸边的城市里，集中于约帕和吕大。这里描述了彼得行的两个神迹，显示出使徒们的属灵能力。彼得成为耶稣的代表，能行像福音书所记载的神迹奇事。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒9:32-43》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒9:32-43</button><div class="collapsed" id ="Text0">

<p><sup>32</sup>彼得周流四方的时候，也到了居住吕大的圣徒那里，<sup>33</sup>遇见一个人，名叫以尼雅，得了瘫痪，在褥子上躺卧八年。<sup>34</sup>彼得对他说：&ldquo;以尼雅，耶稣基督医好你了！起来，收拾你的褥子！&rdquo;他就立刻起来了。<sup>35</sup>凡住吕大和沙仑的人都看见了他，就归服主。</p>

<p><sup>36</sup>在约帕有一个女徒，名叫大比大，翻希腊话就是多加（注：就是&ldquo;羚羊&rdquo;的意思）。她广行善事，多施周济。<sup>37</sup>当时，她患病而死，有人把她洗了，停在楼上。<sup>38</sup>吕大原与约帕相近；门徒听见彼得在那里，就打发两个人去见他，央求他说：&ldquo;快到我们那里去，不要耽延！&rdquo;</p>

<p><sup>39</sup>彼得就起身和他们同去。到了，便有人领他上楼。众寡妇都站在彼得旁边哭，拿多加与她们同在时所做的里衣外衣给他看。<sup>40</sup>彼得叫她们都出去，就跪下祷告，转身对著死人说：&ldquo;大比大，起来！&rdquo;她就睁开眼睛，见了彼得，便坐起来。<sup>41</sup>彼得伸手扶她起来，叫众圣徒和寡妇进去，把多加活活地交给他们。<sup>42</sup>这事传遍了约帕，就有许多人信了主。<sup>43</sup>此后，彼得在约帕一个硝皮匠西门的家里住了多日。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/318.mp4" type="button" class="external-movie">
         观看&nbsp;徒9:32-43&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">彼得开始前往耶路撒冷以外的地方，拜访住在其他城镇的信徒。圣灵使用他行了许多神迹，带领住在吕大和约帕的好些人归向基督。这是在耶路撒冷外，彼得建立的第一批教会。藉由圣灵的带领，彼得透过祷告使大比大死里复活，就如同耶稣使睚鲁的女儿复活一样（<span class="popup-link" @click = "popUp('pop3')"> 可5:38-42</span>）。</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">38&nbsp;</sup>他们来到管会堂的家里，耶稣看见那里乱嚷，并有人大大地哭泣哀号，<sup class="versenum">39&nbsp;</sup>进到里面就对他们说：&ldquo;为什么乱嚷哭泣呢？孩子不是死了，是睡着了。&rdquo;<sup class="versenum">40&nbsp;</sup>他们就嗤笑耶稣。耶稣把他们都撵出去，就带着孩子的父母和跟随的人进了孩子所在的地方，<sup class="versenum">41&nbsp;</sup>就拉着孩子的手，对她说：&ldquo;大利大，古米！&rdquo;（翻出来就是说：&ldquo;闺女，我吩咐你起来！&rdquo;）<sup class="versenum">42&nbsp;</sup>那闺女立时起来走，他们就大大地惊奇；闺女已经十二岁了。</p>
<!-- end bible --></div>
到目前为止，我们已经看到许多例子，是耶稣说圣灵来时会发生的事：&ldquo;我所做的事，信我的人也要做，并且要做比这更大的事&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 约14:12</span>）。

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">12&nbsp;</sup>我实实在在地告诉你们：我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。</p>
<!-- end bible --></div>
大比大在当地照顾他人与帮助寡妇，是女性积极参与事工的例子。彼得也对恩典有更深的了解，他愿意住在一个工人的家，尽管那位工人的职业在犹太人的宗教规条上，被认为是不洁净的。

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒9:40</p>

<p class="forward bible">彼得叫她们都出去，就跪下祷告，转身对著死人说：&ldquo;大比大，起来！&rdquo;她就睁开眼睛，见了彼得，便坐起来。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你对多加的印象如何？在她身上有哪些美好的品格和事奉是你所羡慕的？</li>
	<li class="forward">观察经文是如何称呼这些各地的信徒的？你是如何理解此称呼并上帝的恩典呢？</li>
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
	<li class="forward">与教会或小组成员安排探访教会年老多病的信徒或其家人，为他们祷告并关心他们的需要。</li>
	<li class="forward">借着PCS，求神为你们预备和平之子，成为福音的出口和祝福。也求神使用教会成为其他城市或地区的祝福。</li>
	<li class="forward">主动关心你身边有需要的亲友，为他们祷告并实际关心和满足他们的需要。求主预备时机，让你与他们分享基督，让他们也能经历主耶稣的医治与复活大能。</li>
	<li class="forward">求神感动并柔软你家人、亲友、同事、同学或邻舍的心，开他们的心眼，有主动渴慕并寻求真理的心，询问你有关基督的福音。</li>
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
	<li class="forward">为更多的教会能看到各地宣教的需要，积极参与在其中，无论借着祷告、奉献、短宣、培训或者差派工人，一起参与宣教的行动，成为被主使用的倍增教会。</li>
	<li class="forward">教会能看重探访或是社区爱心行动，以基督的爱接触有需要的人、关心他们的需要，并祈求主在当中预备和平之子，带到教会当中，生命成长和倍增。</li>
	<li class="forward">求神感动并柔软慕道友的心，开他们的心眼，有渴慕真理的心，愿意更多认识耶稣基督并接受主。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->