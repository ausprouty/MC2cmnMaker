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
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与恩典怜悯</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路9:34-35</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>说这话的时候，有一朵云彩来遮盖他们。他们进入云彩里就惧怕。<sup class="versenum">35&nbsp;</sup>有声音从云彩里出来，说：&ldquo;这是我的儿子，我所拣选的，你们要听他！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">耶稣差遣祂的门徒去附近的村落服事人。当他们回来时，都非常高兴上帝透过他们成就许多事：&ldquo;主啊！因你的名，就是鬼也服了我们！&rdquo;耶稣与他们一同欢喜，并对他们说：&ldquo;然而，不要因鬼服了你们而欢喜，要因你们的名记录在天上欢喜。&rdquo;耶稣提醒：我们欢喜并非因为工作有成效，乃是因为真正认识主（<span class="popup-link" @click = "popUp('pop2')"> 路10:17-24</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>七十人回来</h3>

	<p><sup class="versenum">17&nbsp;</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊，因你的名，就是鬼也服了我们！&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;我曾看见<u class="person underline">撒旦</u>从天上坠落，像闪电一样。<sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

	<p><sup class="versenum">21&nbsp;</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊，是的，因为你的美意本是如此。<sup class="versenum">22&nbsp;</sup>一切所有的，都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了！<sup class="versenum">24&nbsp;</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>
	<!-- end bible --></div>
	因为天父的心意是不愿一人沉沦，乃愿人人悔改，认识救主耶稣，恢复与神的关系，得享永恒生命。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣在安息日治病，并且称神为祂的父，这样的举动引起犹太领袖的杀机，因此有一段时间耶稣周游加利利，不愿伫留在犹太地（<span class="popup-link" @click = "popUp('pop3')"> 约7:1</span>）。
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>这事以后，耶稣在加利利游行，不愿在犹太游行，因为犹太人想要杀他。</p>
	<!-- end bible --></div>
	耶稣到底是谁？在第七章中，耶稣明显地身处在一个不信的世界，没有人认识祂真正的身分，反对祂的势力在议论中迅速滋长，随着这个段落的发展和起伏，读者隐约感受到耶稣的&ldquo;时候&rdquo;正逐渐逼近。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音7:1-8:11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音7:1-8:11</button><div class="collapsed" id ="Text0">

<p><sup>7</sup>:<sup>1</sup>这事以后，耶稣在加利利游行，不愿在犹太游行，因为犹太人想要杀他。<sup>2</sup>当时，犹太人的住棚节近了，<sup>3</sup>耶稣的弟兄就对他说：&ldquo;你离开这里上犹太去吧！叫你的门徒也看见你所行的事。<sup>4</sup>人要显扬名声，没有在暗处行事的，你如果行这些事，就当将自己显明给世人看。&rdquo;<sup>5</sup>因为连他的弟兄说这话，是因为不信他。</p>

<p><sup>6</sup>耶稣就对他们说:&ldquo;我的时候还没有到，你们的时候常是方便的。<sup>7</sup>世人不能恨你们，却是恨我，因为我指证他们所做的事是恶的。<sup>8</sup>你们上去过节吧！我现在不上去过这节，因为我的时候还没有满。&rdquo;<sup>9</sup>耶稣说了这话，仍旧住在加利利。<sup>10</sup>但他弟兄上去以后，他也上去过节，不是明去，似乎是暗去的。<sup>11</sup>正在节期，犹太人寻找耶稣说：&ldquo;他在哪里？&rdquo;<sup>12</sup>众人为他纷纷议论，有的说：&ldquo;他是好人。&rdquo;有的说：&ldquo;不然，他是迷惑众人的。&rdquo;<sup>13</sup>只是没有人明明地讲论他，因为怕犹太人。</p>

<p><sup>14</sup>到了节期，耶稣上殿里去教训人。<sup>15</sup>犹太人就希奇说：&ldquo;这个人没有学过，怎么明白书呢？&rdquo;<sup>16</sup>耶稣说：&ldquo;我的教训不是我自己的，乃是那差我来者的。<sup>17</sup>人若立志遵着他的旨意行，就必晓得这教训或是出于　神，或是我凭着自己说的。<sup>18</sup>人凭着自己说，是求自己的荣耀；惟有求那差他来者的荣耀，这人是真的，在他心里没有不义。<sup>19</sup>摩西岂不是传律法给你们吗？你们却没有一个人守律法。为什么想要杀我呢？&rdquo;<sup>20</sup>众人回答说：&ldquo;你是被鬼附着了！谁想要杀你？&rdquo;<sup>21</sup>耶稣说：&ldquo;我做了一件事，你们都以为希奇。<sup>22</sup>摩西传割礼给你们（其实不是从摩西起的，乃是从祖先起的），因此你们也在安息日给人行割礼。<sup>23</sup>人若在安息日受割礼，免得违背摩西的律法，我在安息日叫一个人全然好了，你们就向我生气吗？<sup>24</sup>不可按外貌断定是非，总要按公平断定是非。&rdquo;</p>

<p><sup>25</sup>耶路撒冷人中有的说：&ldquo;这不是他们想要杀的人吗？<sup>26</sup>你看他还明明地讲道，他们也不向他说什么，难道官长真知道这是基督吗？<sup>27</sup>然而我们知道这个人从哪里来；只是基督来的时候，没有人知道他从哪里来。&rdquo;</p>

<p><sup>28</sup>那时，耶稣在殿里教训人，大声说：&ldquo;你们也知道我，也知道我从哪里来；我来并不是由于自己，但那差我来的是真的。你们不认识他，<sup>29</sup>我却认识他，因为我是从他来的，他也是差了我来。&rdquo;<sup>30</sup>他们就想要捉拿耶稣，只是没有人下手，因为他的时候还没有到。<sup>31</sup>但众人中间有好些信他的，说：&ldquo;基督来的时候，他所行的神迹岂能比这人所行的更多吗？&rdquo;</p>

<p><sup>32</sup>法利赛人听见众人为耶稣这样纷纷议论，祭司长和法利赛人就打发差役去捉拿他。<sup>33</sup>于是耶稣说：&ldquo;我还有不多的时候和你们同在，以后就回到差我来的那里去。<sup>34</sup>你们要找我，却找不着；我所在的地方，你们不能到。&rdquo;<sup>35</sup>犹太人就彼此对问说：&ldquo;这人要往哪里去，叫我们找不着呢？难道他要往散住希腊中的犹太人那里去教训希腊人吗？<sup>36</sup>他说&lsquo;你们要找我，却找不着；我所在的地方，你们不能到&rsquo;，这话是什么意思呢？&rdquo;</p>

<p><sup>37</sup>节期的末日，就是最大之日，耶稣站着高声说：&ldquo;人若渴了，可以到我这里来喝！<sup>38</sup>信我的人，就如经上所说：&lsquo;从他腹中要流出活水的江河来。&rsquo;&rdquo;<sup>39</sup>耶稣这话是指着信他之人要受圣灵说的。那时还没有赐下圣灵来，因为耶稣尚未得着荣耀。<sup>40</sup>众人听见这话，有的说：&ldquo;这真是那先知。&rdquo;<sup>41</sup>有的说：&ldquo;这是基督。&rdquo;但也有的说：&ldquo;基督岂是从加利利出来的吗？<sup>42</sup>经上岂不是说&lsquo;基督是大卫的后裔，从大卫本乡伯利恒出来的&rsquo;吗？&rdquo;<sup>43</sup>于是众人因着耶稣起了纷争。<sup>44</sup>其中有人要捉拿他，只是无人下手。<sup>45</sup>差役回到祭司长和法利赛人那里，他们对差役说：&ldquo;你们为什么没有带他来呢？&rdquo;<sup>46</sup>差役回答说：&ldquo;从来没有像他这样说话的。&rdquo;<sup>47</sup>法利赛人说：&ldquo;你们也受了迷惑吗？<sup>48</sup>官长或是法利赛人岂有信他的呢？<sup>49</sup>但这些不明白律法的百姓是被咒诅的。&rdquo;<sup>50</sup>内中有尼哥德慕，就是从前去见耶稣的，对他们说：<sup>51</sup>&ldquo;不先听本人的口供，不知道他所做的事，难道我们的律法还定他的罪吗？&rdquo;<sup>52</sup>他们回答说：&ldquo;你也是出于加利利吗？你且去查考，就可知道加利利没有出过先知。&rdquo;</p>

<p><sup>8</sup>:<sup>1</sup>于是各人都回家去了，耶稣却往橄榄山去。<sup>2</sup>清早又回到殿里，众百姓都到他那里去，他就坐下教训他们。<sup>3</sup>文士和法利赛人带着一个行淫时被拿的妇人来，叫她站在当中。<sup>4</sup>就对耶稣说：&ldquo;夫子，这妇人是正行淫之时被拿的。<sup>5</sup>摩西在律法上吩咐我们，把这样的妇人用石头打死。你说该把她怎么样呢？&rdquo;<sup>6</sup>他们说这话，乃试探耶稣，要得着告他的把柄。耶稣却弯着腰用指头在地上画字。<sup>7</sup>他们还是不住地问他，耶稣就直起腰来，对他们说：&ldquo;你们中间谁是没有罪的，谁就可以先拿石头打她。&rdquo;<sup>8</sup>于是又弯着腰用指头在地上画字。</p>

<p><sup>9</sup>他们听见这话，就从老到少一个一个地都出去了，只剩下耶稣一人，还有那妇人仍然站在当中。<sup>10</sup>耶稣就直起腰来，对她说：&ldquo;妇人，那些人在哪里呢？没有人定你的罪吗？&rdquo;<sup>11</sup>她说：&ldquo;主啊，没有。&rdquo;耶稣说：&ldquo;我也不定你的罪，去吧！从此不要再犯罪了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/241.mp4" type="button" class="external-movie">
         观看约翰福音7:1-8:11</button>
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

<p class="up">秋季的时候，耶稣和门徒往耶路撒冷，守七天的住棚节（Feast of Tabernacles）。按常例所有的犹太男人必须在这个时候上耶路撒冷，到上帝面前守这节。耶稣的兄弟那时还不相信祂是弥赛亚，都先上去过节。节期过了一半，耶稣到圣殿教导人自己是谁：祂是大卫的子孙，却是在拿撒勒长大。大家因此争论，大声谈论耶稣的事。但祂却趁晚上的时候暗暗地离开那里，独自去祷告，而宗教领袖都在议论耶稣的事。有一个归信耶稣的领袖（尼哥得慕），试图发挥影响力，却遭人奚落。耶稣回到耶路撒冷，他们就带行淫的妇人到祂面前，为要抓耶稣的把柄。当耶稣挑战这群宗教领袖他们自己的罪和铁石心肠时，向人示范出超人的智慧、怜悯、慈悲和恩典的领导风范。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约8:10-11</p>

<p class="forward bible"><sup>10</sup>耶稣就直起腰来，对她说：&ldquo;妇人，那些人在哪里呢？没有人定你的罪吗？&rdquo;<sup>11</sup>她说：&ldquo;主啊，没有。&rdquo;耶稣说：&ldquo;我也不定你的罪，去吧！从此不要再犯罪了。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣的家人不信祂，甚至对祂冷嘲热讽，耶稣所走过的路，祂的门徒也必须经过，我们信主以后是否也会受到不信家人和亲友的误解、嘲讽和逼迫？我们是如何靠主站立得稳，并持续为他们祷告？</li>
	<li class="forward">什么是我的&ldquo;律法&rdquo;？我们是否也会落在和犹太人类似的处境中、遵守传统的教导和规条，立志做一个好基督徒，但却不真的明白耶稣的教训？谈谈你的看法和感受，并对你有什么警惕？</li>
	<li class="forward">谁有资格论断人的罪？耶稣没有轻看罪，却给行淫被抓的女人新的机会重新生活，这事件给你什么提醒或有什么感动你的？</li>
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
	<li class="forward">这周找一个时间，和主倾诉你的心底话，求主监察你心，是否有得罪神或不讨神喜悦的地方？或是把心底的一切的委屈、难受和不解带到施恩怜悯的主面前，求主担负你的重担，擦干你的眼泪，让祂的话语安慰你、刚强你。</li>
	<li class="forward">立定心志每天灵修，与主面对面，继续在神话语上扎根，要真认识和体验基督的真实。也为门徒祷告，求主刚强他们的信心，并陪伴栽培和坚定他们的信仰。</li>
	<li class="forward">求主开你们的心眼，有敏锐的洞察能力，持续为自己家庭、小区、城市和国家守望。求主的真光照进人心中每个黑暗的角落，任何不公不义的手段，都求主亲自炼净和审判。愿我们的国家都&ldquo;行公义、好怜悯，存谦卑的心与我们的神同行。&rdquo;</li>
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

<p>监察人心的主，祢知道人心所存的，世人无法在祢面前隐藏。主啊，我们心中的意念祢都晓得。我们为所处的环境，城市和国家祷告，任何不公不义的事、人心的一切诡诈和败坏，甚至公然悖逆和逼迫祢的百姓和教会的罪，求主赦免和饶恕。求主的真光照耀，将一切的黑暗驱散，将人心夺回。求主使用我们教会和小组，能够成为这地的光和盐，我们祷告每一千人中就有一间教会或小组，成为这地的灯台，指引他们回到父神的身边。感恩祷告是奉我们主耶稣的圣名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->