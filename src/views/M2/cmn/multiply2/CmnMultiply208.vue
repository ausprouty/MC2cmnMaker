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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>来看，并跟从我</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路4:5</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>魔鬼又领他上了高山，霎时间把天下的万国都指给他看，</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣要人&ldquo;悔改&rdquo;，以恢复和上帝的关系。耶稣也告诉门徒：&ldquo;来跟从我！我要叫你们得人如得鱼一样。&rdquo;耶稣呼召每个门徒活出&ldquo;跟从祂&rdquo;和&ldquo;得人如得鱼&rdquo;的双重呼召。我们当将自己奉献委身于耶稣，转变我们的日常生活和人际关系。让我们彼此鼓励，持续不断地悔改、跟随和得人。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">道成了肉身，就是耶稣基督，祂住在世人中间，将上帝完全地彰显出来。施洗约翰在约旦河一带的传道和施洗引起了广泛的响应，甚至惊动了耶路撒冷的宗教领袖，因此他们派人前来讯问究竟：&ldquo;你是何人？你有什么权柄为人施洗？&rdquo;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音1:19-51》两遍。。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音1:19-51</button><div class="collapsed" id ="Text0">

<p><sup>19</sup> 约翰所作的见证记在下面：犹太人从耶路撒冷差祭司和利未人到约翰那里，问他说：&ldquo;你是谁？&rdquo;<sup>20</sup>他就明说，并不隐瞒；明说：&ldquo;我不是基督。&rdquo;<sup>21</sup>他们又问他说：&ldquo;这样，你是谁呢？是以利亚吗？&rdquo;他说：&ldquo;我不是。&rdquo;&ldquo;是那先知吗？&rdquo;他回答说：&ldquo;不是。&rdquo;<sup>22</sup>于是他们说：&ldquo;你到底是谁？叫我们好回复差我们来的人。你自己说，你是谁？&rdquo;<sup>23</sup>他说：&ldquo;我就是那在旷野有人声喊着说：&lsquo;修直主的道路&rsquo;，正如先知以赛亚所说的。&rdquo;<sup>24</sup>那些人是法利赛人差来的（注：或作&ldquo;那差来的是法利赛人&rdquo;）。<sup>25</sup>他们就问他说：&ldquo;你既不是基督，不是以利亚，也不是那先知，为什么施洗呢？&rdquo;<sup>26</sup>约翰回答说：&ldquo;我是用水施洗，但有一位站在你们中间，是你们不认识的，<sup>27</sup>就是那在我以后来的，我给他解鞋带也不配。&rdquo;<sup>28</sup>这是在约旦河外伯大尼（注：有古卷作&ldquo;伯大巴喇&rdquo;），约翰施洗的地方作的见证。</p>

<p><sup>29</sup>次日，约翰看见耶稣来到他那里，就说：&ldquo;看哪，　神的羔羊，除去（注：或作&ldquo;背负&rdquo;）世人罪孽的。<sup>30</sup>这就是我曾说&lsquo;有一位在我以后来，反成了在我以前的，因他本来在我以前。&rsquo;<sup>31</sup>我先前不认识他，如今我来用水施洗，为要叫他显明给以色列人。&rdquo;<sup>32</sup>约翰又作见证说：&ldquo;我曾看见圣灵彷佛鸽子从天降下，住在他的身上。<sup>33</sup>我先前不认识他，只是那差我来用水施洗的，对我说：&lsquo;你看见圣灵降下来，住在谁的身上，谁就是用圣灵施洗的。&rsquo;<sup>34</sup>我看见了，就证明这是　神的儿子。&rdquo;<sup>35</sup>再次日，约翰同两个门徒站在那里。<sup>36</sup>他见耶稣行走，就说：&ldquo;看哪，这是　神的羔羊!&rdquo;<sup>37</sup>两个门徒听见他的话，就跟从了耶稣。<sup>38</sup>耶稣转过身来，看见他们跟着，就问他们说：&ldquo;你们要什么？&rdquo;他们说：&ldquo;拉比（&ldquo;拉比&rdquo;翻出来就是&ldquo;夫子&rdquo;），在哪里住？&rdquo;<sup>39</sup>耶稣说：&ldquo;你们来看。&rdquo;他们就去看他在哪里住，这一天便与他同住。那时约有申正了。<sup>40</sup>听见约翰的话，跟从耶稣的那两个人，一个是西门彼得的兄弟安得烈。<sup>41</sup>他先找着自己的哥哥西门，对他说：&ldquo;我们遇见弥赛亚了（&ldquo;弥赛亚&rdquo;翻出来就是&ldquo;基督&rdquo;）！&rdquo;<sup>42</sup>于是领他去见耶稣。耶稣看着他说：&ldquo;你是约翰的儿子西门（注：&ldquo;约翰&rdquo;马太<sup>16</sup>章<sup>17</sup>节称&ldquo;约拿&rdquo;），你要称为矶法（&ldquo;矶法&rdquo;翻出来就是&ldquo;彼得&rdquo;）。&rdquo;</p>

<p><sup>43</sup>又次日，耶稣想要往加利利去，遇见腓力，就对他说：&ldquo;来，跟从我吧!&rdquo;<sup>44</sup>这腓力是伯赛大人，和安得烈、彼得同城。<sup>45</sup>腓力找着拿但业，对他说：&ldquo;摩西在律法上所写的和众先知所记的那一位，我们遇见了，就是约瑟的儿子拿撒勒人耶稣。&rdquo;<sup>46</sup>拿但业对他说：&ldquo;拿撒勒还能出什么好的吗？&rdquo;腓力说：&ldquo;你来看！&rdquo;<sup>47</sup>耶稣看见拿但业来，就指着他说：&ldquo;看哪，这是个真以色列人，他心里是没有诡诈的。&rdquo;<sup>48</sup>拿但业对耶稣说：&ldquo;你从哪里知道我呢？&rdquo;耶稣回答说：&ldquo;腓力还没有招呼你，你在无花果树底下，我就看见你了。&rdquo;<sup>49</sup>拿但业说：&ldquo;拉比，你是　神的儿子，你是以色列的王！&rdquo;<sup>50</sup>耶稣对他说：&ldquo;因为我说在无花果树底下看见你，你就信吗？你将要看见比这更大的事。&rdquo;<sup>51</sup>又说：&ldquo;我实实在在的告诉你们，你们将要看见天开了，神的使者上去下来在人子身上。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/208.mp4" type="button" class="external-movie">
         观看约翰福音1:19-51</button>
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

<p class="up">在旷野四十天后，耶稣开始传道，呼召人来跟随祂。祂开始向我们示范与人建立友好的关系的生活方式。安得烈、彼得、约翰、腓力和拿但业也都彼此认识。耶稣对人说：&ldquo;你来看&rdquo;（来、查看事实）我是谁。祂打开他们的眼睛，使他们能看见祂自己就是所应许的弥赛亚。 当他们相信时，祂就说：&ldquo;来跟从我&rdquo;。耶稣对人的呼召，一个是给尚未相信的人，一个是给相信的人。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约1:45</p>

<p class="forward bible">腓力找着拿但业，对他说：&ldquo;摩西在律法上所写的和众先知所记的那一位，我们遇见了，就是约瑟的儿子拿撒勒人耶稣。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">施洗约翰知道自己是谁，也知道他所见证的耶稣是谁。若有人问你耶稣是谁？你会如何为耶稣作见证？你会如何见证耶稣和你的关系？</li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">耶稣在这卷书中所说的第一句话是&ldquo;你们要什么</span><span lang="EN-US">?</span><span lang="ZH-CN">&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 约1:37</span>）， </span></span></span>
	<div class="popup invisible" id="pop2"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>
	<p><span><span><span lang="ZH-CN"><sup class="versenum">37&nbsp;</sup>两个门徒听见他的话，就跟从了耶稣。 </span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN">今天耶稣仍然在问：&ldquo;你要什么？&rdquo;因为祂了解我们心中最深的渴望和需要。请分享&ldquo;我要什么&rdquo;，并彼此代祷。</span></span></span></li>
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
	<li style="text-align:justify"><span><span><span lang="ZH-CN">想想你这一年的属灵生命状况，是喜乐成长，还是停滞不前？回想你起初信主时的情景，是什么帮助或拦阻你生命成长。求主使你重拾起初对祂的爱心与信心。</span></span></span></li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），并主动表达关心和服事他们。</li>
	<li class="forward">从《福音行动表》中选出2人，本周与他们分享《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">我在</span><span lang="EN-US">________________</span><span lang="ZH-CN">（时间</span><span lang="EN-US">/</span><span lang="ZH-CN">地点）将会</span><span lang="EN-US">__________________</span><span lang="ZH-CN">（对象</span><span lang="EN-US">/</span><span lang="ZH-CN">事情）。</span></span></span></p>

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

<p>爱我的天父，感谢祢，因信耶稣基督，我的罪得到赦免，并且可以称天父为阿爸天父。求祢赐我信心和智慧，当人问我心中盼望的缘由，我愿心中尊祢的名为圣，并随时做好准备，以温柔敬畏的心回答他们。求主帮助我未来一周的生活有见证，并主动提问&ldquo;奇妙的问题&rdquo;来关心身边人的需要，把他们带到祢的面前。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->