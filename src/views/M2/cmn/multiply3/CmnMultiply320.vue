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
                        <div class="chapter_number ltr"><h1>20.</h1></div>
                        <div class="chapter_title ltr"><h1>彼得向外邦人宣教——跨文化宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒10:17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup><u class="person underline">彼得</u>心里正在猜疑之间，不知所看见的异象是什么意思，<u class="person underline">哥尼流</u>所差来的人已经访问到<u class="person underline">西门</u>的家，站在门外，</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">神愿意人参与祂福音传扬的工作，用祂的大能改变人、带领人明白祂美好的心意，而且让所有的信徒愿意打破陈见、彼此接纳，可以在祂的国度的拓展中合一。我们也需要顺服神的带领，从历史中了解神的心意和作为，有热心、信心和爱心参与这样的事工。神给人的救恩就是人必须&ldquo;信耶稣是基督，是神的儿子&rdquo;，这样&ldquo;就可以因祂的名得生命&rdquo;(<span class="popup-link" @click = "popUp('pop5')"> 约20:31</span>)。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>但记这些事要叫你们信耶稣是基督，是神的儿子，并且叫你们信了他，就可以因他的名得生命。</p>
	<!-- end bible --></div>
	深愿神的国降临，更多人因认识耶稣基督得享丰盛的生命，享受在基督里真正的自由和释放。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>


<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">彼得和约帕的几个弟兄就动身到哥尼流家去了。彼得现在清楚异象的含义了。彼得就开口见证从死里复活的耶稣是基督，凡信他的人，必因他的名，得蒙赦罪。彼得话还没完，圣灵就降下来了。这记号是给当时在场的犹太人看的。犹太人不能想象外邦人也能够得到圣灵的恩赐。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒10:34-48》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒10:34-48</button><div class="collapsed" id ="Text0">

<p><sup>34</sup>彼得就开口说：&ldquo;我真看出　神是不偏待人。<sup>35</sup>原来各国中，那敬畏主、行义的人都为主所悦纳。<sup>36</sup>神藉著耶稣基督（他是万有的主）传和平的福音，将这道赐给以色列人。<sup>37</sup>这话在约翰宣传洗礼以后，从加利利起，传遍了犹太。<sup>38</sup>神怎样以圣灵和能力膏拿撒勒人耶稣，这都是你们知道的。他周流四方，行善事，医好凡被魔鬼压制的人，因为　神与他同在。</p>

<p><sup>39</sup>他在犹太人之地并耶路撒冷所行的一切事，有我们作见证。他们竟把他挂在木头上杀了。<sup>40</sup>第三日，　神叫他复活，显现出来；<sup>41</sup>不是显现给众人看，乃是显现给　神预先所拣选为他作见证的人看，就是我们这些在他从死里复活以后，和他同吃同喝的人。<sup>42</sup>他吩咐我们传道给众人，证明他是　神所立定的，要作审判活人死人的主。<sup>43</sup>众先知也为他作见证，说：&lsquo;凡信他的人，必因他的名得蒙赦罪。&rsquo;</p>

<p><sup>44</sup>彼得还说这话的时候，圣灵降在一切听道的人身上。<sup>45</sup>那些奉割礼和彼得同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都希奇，<sup>46</sup>因听见他们说方言，称赞　神为大。<sup>47</sup>于是彼得说：&ldquo;这些人既受了圣灵，与我们一样，谁能禁止用水给他们施洗呢？&rdquo;<sup>48</sup>就吩咐奉耶稣基督的名给他们施洗。他们又请彼得住了几天。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/320.mp4" type="button" class="external-movie">
         观看&nbsp;徒10:34-48&nbsp;</button>
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
	<li class="nobreak-final-final">彼得的经历教导他一个重要的神学功课。主使用这个经历将救恩带给哥尼流及他的全家，也借机教导彼得和其他同行的犹太信徒一个重要的真理。主悦纳万民，他将同样的救恩赐给每个人。外邦人同样经历到犹太人在五旬节所经历的（<span class="popup-link" @click = "popUp('pop2')"> 徒2:4</span>；

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 徒10:47</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">47&nbsp;</sup>于是<u class="person underline">彼得</u>说：&ldquo;这些人既受了圣灵，与我们一样，谁能禁止用水给他们施洗呢？&rdquo;</p>
	<!-- end bible --></div>
	强化了这个真理的真确性。彼得看出主对非犹太人的悦纳，就按照他们为犹太的新信徒所做的一样，命令这些人立即受洗。随后彼得在非犹太人的家中又待了几天，跟进初信的人。如今彼得帮助建立跨文化的教会，如同耶稣先前所说的（<span class="popup-link" @click = "popUp('pop4')"> 徒1:8</span>）：

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	在耶路撒冷、犹太全地和撒玛利亚（徒八章），直到外邦人中间（徒十章）。文化籓篱的门如今大开，天国得以扩张。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒10:45-46</p>

<p class="forward bible"><sup>45</sup>那些奉割礼和彼得同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都希奇，<sup>46</sup>因听见他们说方言，称赞　神为大。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你在彼得这篇讲词中发现有任何其它的迹象，足以表明这篇讲词是对异邦的听众而讲的吗？我们从他们对这件事的处置可以学到什么教训？</li>
	<li class="forward">试分享教会在宣教的事工上，可以摆上什么？如何动员更多教会和信徒参与跨民族的宣教？</li>
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
	<li class="forward">在信靠耶稣的事上，你想有哪方面是耶稣会责备你信的不够的吗？在灵修时间，向主敞开你的心，并求祂用神的话语鼓励和刚强你，而你也将一切交托给祂。</li>
	<li class="forward">接下来主动关心不在身边的家人，为他们的救恩持续代祷，找机会向他们分享神的作为和奇事。求神也让你看到祂在你亲友中所行奇妙的神迹。</li>
	<li class="forward">为教会的牧者同工团队代求，求神让他们有颗合而为一的心，凡事谦卑寻求神的心意，以基督的心为心，积极推动教会的宣教事工，为主得人。</li>
	<li class="forward">持续花时间造就门徒，若他们心里还有任何疑惑，求神使用你来牧养和建立他们。他们的生命因为主而得坚立，靠主勇敢作见证。</li>
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
	<li class="forward">更多教会开始为普世，不同种族，跨文化和跨地域的宣教事工代祷和奉献。也求神开我们的心眼，看到广大禾场的需要，主动回应并参与祷告和宣教。</li>
	<li class="forward">为本城市教会与教会，牧者与牧者之间的配搭和连接祷告，愿众教会因着基督并祂的使命走在一起，各人看别人比自己强，并看得合乎中道；不因神学立场而争论，分门结党，乃为人人可以有一次听到福音的机会而齐心兴旺福音。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->