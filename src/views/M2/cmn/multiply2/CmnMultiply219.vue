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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动二</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可1:23-24</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>在会堂里有一个人被污鬼附着，他喊叫说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干？你来灭我们吗？我知道你是谁，乃是神的圣者！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">天国近了！耶稣宣告一个应验的时代已经来到，并且呼吁百姓作出响应：&ldquo;你们要悔改，信福音&rdquo;。在《马可福音》中，神迹的主要功用是要确认主耶稣的权柄，同时也是慈爱与怜悯的工作（<span class="popup-link" @click = "popUp('pop2')"> 可1:41</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">41&nbsp;</sup>耶稣动了慈心，就伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;</p>
	<!-- end bible --></div>
	及国度来临的兆头（<span class="popup-link" @click = "popUp('pop3')"> 可3:26</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>若<u class="person underline">撒旦</u>自相攻打纷争，他就站立不住，必要灭亡。</p>
	<!-- end bible --></div>
	耶稣在加利利事工所有主要的特质：教导、赶鬼、医治和宣告，就在这位加利利的传道人马不停蹄的服事中，上帝的国悄悄地展开。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">在加利利海边，耶稣呼召了四位平凡的渔夫来跟从祂，西门、安得烈、雅各和约翰成为耶稣首批的门徒（<span class="popup-link" @click = "popUp('pop4')"> 可1:16-20</span>）；
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>耶稣顺着加利利的海边走，看见<u class="person underline">西门</u>和<u class="person underline">西门</u>的兄弟<u class="person underline">安得烈</u>在海里撒网，他们本是打鱼的。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;<sup class="versenum">18&nbsp;</sup>他们就立刻舍了网，跟从了他。<sup class="versenum">19&nbsp;</sup>耶稣稍往前走，又见<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>在船上补网，<sup class="versenum">20&nbsp;</sup>耶稣随即招呼他们。他们就把父亲<u class="person underline">西庇太</u>和雇工人留在船上，跟从耶稣去了。</p>
	<!-- end bible --></div>
	这个小型的巡回布道团来到了迦百农，就在一个安息日，耶稣在会堂的教导震惊了在场的人，因为他们从未见过如此带有权柄的教导，更令人震撼的是，在众目睽睽之下，耶稣以三言两语行了一个赶鬼的神迹，耶稣的名声因此传开了（<span class="popup-link" @click = "popUp('pop5')"> 可1:21-28</span>）！

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>到了迦百农，耶稣就在安息日进了会堂教训人。<sup class="versenum">22&nbsp;</sup>众人很稀奇他的教训，因为他教训他们正像有权柄的人，不像文士。<sup class="versenum">23&nbsp;</sup>在会堂里有一个人被污鬼附着，他喊叫说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干？你来灭我们吗？我知道你是谁，乃是神的圣者！&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣责备他说：&ldquo;不要作声！从这人身上出来吧！&rdquo;<sup class="versenum">26&nbsp;</sup>污鬼叫那人抽了一阵风，大声喊叫，就出来了。<sup class="versenum">27&nbsp;</sup>众人都惊讶，以致彼此对问说：&ldquo;这是什么事？是个新道理啊！他用权柄吩咐污鬼，连污鬼也听从了他。&rdquo;<sup class="versenum">28&nbsp;</sup>耶稣的名声就传遍了加利利的四方。</p>
	<!-- end bible --></div>
	就在同一个安息日，耶稣离开会堂，来到了西门的家，并且医治了西门的岳母。</li>
	<li class="nobreak-final-final">&nbsp;</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音1:29-39》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音1:29-39</button><div class="collapsed" id ="Text0">

<p><sup>29</sup>他们一出会堂，就同着雅各、约翰，进了西门和安得烈的家。<sup>30</sup>西门的岳母正害热病躺着，就有人告诉耶稣。<sup>31</sup>耶稣进前拉着她的手，扶她起来，热就退了，她就服事他们。<sup>32</sup>天晚日落的时候，有人带着一切害病的和被鬼附的，来到耶稣跟前；<sup>33</sup>合城的人都聚集在门前。<sup>34</sup>耶稣治好了许多害各样病的人，又赶出许多鬼，不许鬼说话，因为鬼认识他。<sup>35</sup>次日早晨，天未亮的时候，耶稣起来，到旷野地方去，在那里祷告。<sup>36</sup>西门和同伴追了他去，<sup>37</sup>遇见了就对他说：&ldquo;众人都找你。&rdquo;<sup>38</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup>39</sup>于是在加利利全地，进了会堂，传道，赶鬼。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/219.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音1:29-39&nbsp;</button>
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

<p class="up">耶稣的第二个外展事工是在彼得的家，时间发生在天晚日落的时候。众人都来看在会堂赶出污鬼的那个人。接下来的事奉并非在计划之内，一共持续了好几个小时，直到夜深。经过整晚的事奉之后，耶稣第二天一早起来，就暗暗地离开众人，独自与天父相处， 聆听祂的声音，与祂交通，并寻求生命和事工的下一步。尽管众人都要耶稣留下来成就更多事工，祂却离开那地，为了顺服天父到天父要祂去的其他地方传道。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可1:38-39</p>

<p class="forward bible"><sup>38</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup>39</sup>于是在加利利全地，进了会堂，传道，赶鬼。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">主耶稣出来传道，祂非常清楚自己的使命。今天我们也不能用扶贫济困、慈善福利、社会公义、民族解放等&ldquo;社会福音、解放福音&rdquo;来代替悔改得生命的&ldquo;神的福音&rdquo;，或者把福音当作社会改良、道德教育的手段。因为主耶稣服事的次序是先&ldquo;传道&rdquo;，再&ldquo;赶鬼&rdquo;，&ldquo;医病&rdquo;的服事，祂看重神的见证过于工作。</li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">值得留意的是耶稣使用的重新得力的方法：不是晚起床，而是在别人还在睡觉的时候早早起来，与父神亲近，需求祂的心意。主耶稣从祷告中得到力量。耶稣祷告的事实，是我们必须祷告的最有力的根据。祂虽然是上帝的儿子，却仍借着祷告，寻求力量、指导和生命。祷告在信徒的属灵生命中是何等的重要啊！</span></span></span></span><span><span><span><span lang="ZH-CN">你的祷告生活如何？今天耶稣的故事对你的祷告生命有什么启发？需要做哪些调整和改变吗？为什么？</span></span></span></span></li>
</ul>

<p class="forward">&nbsp;</p>

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
	<li style="text-align:justify"><span><span><span lang="ZH-CN">最近在教会服事、或生活、或事业、或课业、或家庭上是否有力不能胜，疲惫不堪，无力挫折，忙乱不堪吗？未来这周每天持续固定在清晨把</span><span lang="EN-US">30</span><span lang="ZH-CN">分钟单单分别给神，就是寻求神的面，向神倾心吐意，并从神话语得着智慧、信心和能力。</span></span></span></li>
	<li class="forward">当合城的人听到耶稣所行的神迹，也希望得医治，但耶稣选择离开那里，因为祂清楚：&ldquo;我也好在那里传道，因为我是为这事出来的。&rdquo;（可1:38） 接下来，你也来到主面前，重新调整你生活的优先次序，做智慧的取舍，作神聪明的管家。</li>
	<li class="forward">在教会的服事与参与，求主也大大使用你来造就和牧养初信者，在神话语上造就他们，使他们也被主使用，成为倍增的门徒。</li>
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

<p><span><span><span lang="ZH-CN">亲爱的主，祢降世为要拯救罪人；祢活着就是传讲福音。祢行神迹是为了证明祢是神的儿子；祢服事人，出于祢的慈爱与怜悯。主啊，我们已经蒙恩得救，有了神儿子的生命和地位，就当以主的心为心，以主的事为念。求主帮助我们调整生活的优先次序，并效法祢，不为吃饭、赚钱、享乐而活，乃单单为追随主的脚踪，广传福音、拓展天国而活。我们如此祷告，是效法我们主耶稣的榜样，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->