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
                        <div class="chapter_number ltr"><h1>31.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与饶恕</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路7:22</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>耶稣回答说：&ldquo;你们去，把所看见、所听见的事告诉<u class="person underline">约翰</u>，就是：瞎子看见，瘸子行走，长大麻风的洁净，聋子听见，死人复活，穷人有福音传给他们。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">上帝不只爱我们，祂更要我们学像基督，效法祂的模样，像祂一样经历天父，让人从我们身上看见天父的样子（<span class="popup-link" @click = "popUp('pop2')"> 罗8:29</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>因为他预先所知道的人，就预先定下效法他儿子的模样，使他儿子在许多弟兄中做长子；</p>
	<!-- end bible --></div>
	这都是上帝的工作，因祂应许我们：&ldquo;那在你们心里动了善工的，必成全这工&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 腓1:6</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>我深信那在你们心里动了善工的必成全这工，直到耶稣基督的日子。</p>
	<!-- end bible --></div>
	上帝会在你我生命中动工，使我们能像基督，愿我们因这应许大受激励，并存喜乐的心看神要在我们身上成就的大事。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">被分封王希律关在狱中的施洗约翰风闻这些传言，在不确定中，他吩咐自己的门徒前往求见耶稣澄清真相。耶稣间接的回答他，祂所做的正是旧约先知所预言的拯救工作（<span class="popup-link" @click = "popUp('pop4')"> 路加福音7:18-23</span>）。
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup><u class="person underline">约翰</u>的门徒把这些事都告诉<u class="person underline">约翰</u>。<sup class="versenum">19&nbsp;</sup>他便叫了两个门徒来，打发他们到主那里去说：&ldquo;那将要来的是你吗？还是我们等候别人呢？&rdquo;<sup class="versenum">20&nbsp;</sup>那两个人来到耶稣那里，说：&ldquo;施洗的<u class="person underline">约翰</u>打发我们来问你：那将要来的是你吗？还是我们等候别人呢？&rdquo;<sup class="versenum">21&nbsp;</sup>正当那时候，耶稣治好了许多有疾病的、受灾患的、被恶鬼附着的，又开恩叫好些瞎子能看见。<sup class="versenum">22&nbsp;</sup>耶稣回答说：&ldquo;你们去，把所看见、所听见的事告诉<u class="person underline">约翰</u>，就是：瞎子看见，瘸子行走，长大麻风的洁净，聋子听见，死人复活，穷人有福音传给他们。<sup class="versenum">23&nbsp;</sup>凡不因我跌倒的，就有福了！&rdquo;</p>
	<!-- end bible --></div>
	耶稣不但没有责备施洗约翰的疑惑，并且肯定这位先知的身份和工作（<span class="popup-link" @click = "popUp('pop5')"> 路加福音7:24-28</span>）；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup><u class="person underline">约翰</u>所差来的人既走了，耶稣就对众人讲论<u class="person underline">约翰</u>说：&ldquo;你们从前出去到旷野是要看什么呢？要看风吹动的芦苇吗？<sup class="versenum">25&nbsp;</sup>你们出去到底是要看什么？要看穿细软衣服的人吗？那穿华丽衣服、宴乐度日的人是在王宫里。<sup class="versenum">26&nbsp;</sup>你们出去究竟是要看什么？要看先知吗？我告诉你们，是的，他比先知大多了。<sup class="versenum">27&nbsp;</sup>经上记着说：&lsquo;我要差遣我的使者在你前面预备道路&rsquo;，所说的就是这个人。<sup class="versenum">28&nbsp;</sup>我告诉你们：凡妇人所生的，没有一个大过<u class="person underline">约翰</u>的；然而神国里最小的比他还大。&rdquo;</p>
	<!-- end bible --></div>
	该受责备的是这个不信的世代，他们就像无知的孩童，存心拒绝上帝的先知和儿子（<span class="popup-link" @click = "popUp('pop6')"> 路加福音7:29-35</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>众百姓和税吏既受过<u class="person underline">约翰</u>的洗，听见这话，就以神为义。<sup class="versenum">30&nbsp;</sup>但法利赛人和律法师没有受过<u class="person underline">约翰</u>的洗，竟为自己废弃了神的旨意。<sup class="versenum">31&nbsp;</sup>主又说：&ldquo;这样，我可用什么比这世代的人呢？他们好像什么呢？<sup class="versenum">32&nbsp;</sup>好像孩童坐在街市上，彼此呼叫说：&lsquo;我们向你们吹笛，你们不跳舞！我们向你们举哀，你们不啼哭！&rsquo;<sup class="versenum">33&nbsp;</sup>施洗的<u class="person underline">约翰</u>来，不吃饼不喝酒，你们说他是被鬼附着的。<sup class="versenum">34&nbsp;</sup>人子来，也吃也喝，你们说他是贪食好酒的人，是税吏和罪人的朋友。<sup class="versenum">35&nbsp;</sup>但智慧之子都以智慧为是。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent2">然而在这个不信的世代中仍然有少数忠信的人，在作者路加的笔下，我们看到了两幅以&ldquo;信心行动&rdquo;跟随耶稣的图画，画中的主角除了一位有罪的女人，还有一小群在耶稣&ldquo;巡回布道团&rdquo;忠心服事的妇女。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音7:36&ndash;8:3》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音7:36&ndash;8:3</button><div class="collapsed" id ="Text0">

<p><sup>7</sup>:<sup>36</sup>有一个法利赛人请耶稣和他吃饭，耶稣就到法利赛人家里去坐席。<sup>37</sup>那城里有一个女人，是个罪人，知道耶稣在法利赛人家里坐席，就拿着盛香膏的玉瓶，<sup>38</sup>站在耶稣背后，挨着他的脚哭，眼泪湿了耶稣的脚，就用自己的头发擦干，又用嘴连连亲他的脚，把香膏抹上。</p>

<p><sup>39</sup>请耶稣的法利赛人看见这事，心里说：&ldquo;这人若是先知，必知道摸他的是谁，是个怎样的女人，乃是个罪人。&rdquo;<sup>40</sup>耶稣对他说：&ldquo;西门，我有句话要对你说。&rdquo;西门说：&ldquo;夫子，请说。&rdquo;<sup>41</sup>耶稣说：&ldquo;一个债主有两个人欠他的债：一个欠五十两银子，一个欠五两银子，<sup>42</sup>因为他们无力偿还，债主就开恩免了他们两个人的债。这两个人哪一个更爱他呢？&rdquo;<sup>43</sup>西门回答说：&ldquo;我想是那多得恩免的人。&rdquo;耶稣说：&ldquo;你断的不错。&rdquo;</p>

<p><sup>44</sup>于是转过来向着那女人，便对西门说：&ldquo;你看见这女人吗？我进了你的家，你没有给我水洗脚，但这女人用眼泪湿了我的脚，用头发擦干；<sup>45</sup>你没有与我亲嘴，但这女人从我进来的时候就不住地用嘴亲我的脚；。<sup>46</sup>你没有用油抹我的头，但这女人用香膏抹我的脚。<sup>47</sup>所以我告诉你，她许多的罪都赦免了，因为她的爱多；但那赦免少的，他的爱就少。&rdquo;<sup>48</sup>于是对那女人说：&ldquo;你的罪赦免了！&rdquo;<sup>49</sup>同席的人心里说：&ldquo;这是什么人，竟赦免人的罪呢？&rdquo;<sup>50</sup>耶稣对那女人说：&ldquo;你的信救了你，平平安安地回去吧！&rdquo; <sup>8</sup>:<sup>1</sup>过了不多日，耶稣周游各城各乡传道，宣讲　神国的福音。和他同去的有十二个门徒，<sup>2</sup>还有被恶鬼所附、被疾病所累、已经治好的几个妇女，内中有称为抹大拉的马利亚，曾有七个鬼从她身上赶出来；<sup>3</sup>又有希律的家宰苦撒的妻子约亚拿，并苏撒拿，和好些别的妇女，都是用自己的财物供给耶稣和门徒。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/231.mp4" type="button" class="external-movie">
         观看路加福音7:36&ndash;8:3</button>
    <div class="collapsed"></div>




<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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

<p class="up">耶稣遇见一个对祂好奇的法利赛人，名叫西门。他住在迦百农，已关注耶稣的事工一段时间。西门邀请耶稣到他家，并邀来许多法利赛人。耶稣接受了天父安排的邀请，去接触这群只注重宗教仪文且自义的人。晚上耶稣到的时候，他们并没有用给客人的礼仪来接待祂。于是，天父差了一个有罪的女人来为耶稣行这些礼仪。祂利用这机会教导西门：那些罪被赦免的人会诚实面对自己的需要并有谦卑的心。西门则是掩盖自己的罪。我们应当小心不要落入同样的光景里。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路7:47-48</p>

<p class="forward bible"><sup>47</sup>所以我告诉你，她许多的罪都赦免了，因为她的爱多；但那赦免少的，他的爱就少。&rdquo;<sup>48</sup>于是对那女人说：&ldquo;你的罪赦免了！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">不论跟随耶稣的人曾经是多么的奸恶，或是多么的善良，耶稣都把他们从永远的灭亡中拯救出来。你曾经历过上帝奇妙的赦罪之恩吗？你用了什么行动回应上帝的恩典和赦免？</li>
	<li class="forward">这段叙述中出现的人物说明了一件事实，就是耶稣国度中的子民没有种族、国籍和性别的分别，凡是以信心、谦卑和感谢来到祂面前的人，祂都接纳。你是否觉得还是有些人是不配神的恩典和赦免？为什么？你想耶稣会怎么做？</li>
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
	<li class="forward">在《信徒动员表》里写下2位你在教会认识多时，但没有深谈的。这周找一个时间请他们分享信主的经历和最大的改变，同时你也分享你信主的经历，彼此鼓励和代祷。</li>
	<li class="forward">花时间为你的属灵长辈和造就者祷告（就是教会的领袖，或是那些神曾放在你生命中用圣经、生命的榜样来造就、陪伴和督责你的人）。求神加倍赐福和使用他们，成为多人的祝福，他们的家人也蒙神的眷顾与赐福。</li>
	<li class="forward">继续祷告神，求祂让你经历领人归主的喜悦，亲眼经历罪得赦免，爱心回应的真实见证。</li>
	<li class="forward">在你造就初信者生命时，更多的包容、接纳与陪伴对方成长，相信神对他生命有奇妙的计划。同时鼓励门徒和你一起在教会中主动参与服事，报答主恩。</li>
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

<p>亲爱的天父，因祢爱我们的大爱，祢差派祢的独生爱子为我们降世为人，成为挽回祭，使我们可以因信耶稣成为祢的儿女。感谢主耶稣凡事作了我们的榜样，教导我们不要单顾自己的事，也要顾别人的事。我们当以祢的眼光来看待身边的人，不是用我们的标准来论断批评人，以致得罪了祢。主啊，我们愿意效法祢，以祢的爱来爱与饶恕他们，并帮助他们来认识祢、经历祢和服事祢。感恩祷告是奉我们主耶稣的圣名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->