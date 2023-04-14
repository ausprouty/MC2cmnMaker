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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-prophet-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>先知亚伯拉罕</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span lang="ZH-CN">向后看</span></div>
</div>

<div>
<h2>祷告关怀</h2>

<ul>
	<li>这个星期有过什么让人兴奋的故事？</li>
	<li>这个星期遇到的挑战是什么？</li>
	<li>本周你想要耶稣为你做什么？</li>
	<li>简短祷告，祈求耶稣满足大家所分享的需要。</li>
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


<h2>庆贺实践</h2>

<ul>
	<li>上周你是怎样顺服耶稣的?</li>
	<li>上周你和谁分享了这个故事？</li>
</ul>

<h2>天父心意</h2>

<p>鼓励彼此不断地顺服基督，并且互相提醒关于和他人分享这些故事的重要性。</p>

<ul>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>阅读经文</h3>

<p>读出经文创世记12：1-8，15：1-6，22:1-19两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 创世记 12:1-8</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>应许万族因亚伯兰得福</h3>

<p class="chapter-2"><sup class="versenum">1&nbsp;</sup>耶和华对<u class="person underline">亚伯兰</u>说：&ldquo;你要离开本地、本族、父家，往我所要指示你的地去。 <sup class="versenum">2&nbsp;</sup>我必叫你成为大国，我必赐福给你，叫你的名为大，你也要叫别人得福。 <sup class="versenum">3&nbsp;</sup>为你祝福的，我必赐福于他；那咒诅你的，我必咒诅他。地上的万族都要因你得福。&rdquo; <sup class="versenum">4&nbsp;</sup><u class="person underline">亚伯兰</u>就照着耶和华的吩咐去了，<u class="person underline">罗得</u>也和他同去。<u class="person underline">亚伯兰</u>出<span class="double-underline place">哈兰</span>的时候年七十五岁。 <sup class="versenum">5&nbsp;</sup><u class="person underline">亚伯兰</u>将他妻子<u class="person underline">撒莱</u>和侄儿<u class="person underline">罗得</u>，连他们在<span class="double-underline place">哈兰</span>所积蓄的财物、所得的人口，都带往<span class="double-underline place">迦南</span>地去。他们就到了<span class="double-underline place">迦南</span>地。 <sup class="versenum">6&nbsp;</sup><u class="person underline">亚伯兰</u>经过那地，到了<span class="double-underline place">示剑</span>地方，<span class="double-underline place">摩利</span>橡树那里。那时，<span class="double-underline place">迦南</span>人住在那地。 <sup class="versenum">7&nbsp;</sup>耶和华向<u class="person underline">亚伯兰</u>显现，说：&ldquo;我要把这地赐给你的后裔。&rdquo;<u class="person underline">亚伯兰</u>就在那里为向他显现的耶和华筑了一座坛。 <sup class="versenum">8&nbsp;</sup>从那里他又迁到<span class="double-underline place">伯特利</span>东边的山，支搭帐篷。西边是<span class="double-underline place">伯特利</span>，东边是<span class="double-underline place">艾</span>。他在那里又为耶和华筑了一座坛，求告耶和华的名。</p>
</div>
</div>
</div>
</div>

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">读两遍 创世记 15:1-6</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>神应许亚伯兰之后裔多如众星</h3>

<p class="chapter-2"><sup class="versenum">1&nbsp;</sup>这事以后，耶和华在异象中有话对<u class="person underline">亚伯兰</u>说：&ldquo;<u class="person underline">亚伯兰</u>，你不要惧怕！我是你的盾牌，必大大地赏赐你。&rdquo; <sup class="versenum">2&nbsp;</sup><u class="person underline">亚伯兰</u>说：&ldquo;主耶和华啊，我既无子，你还赐我什么呢？并且要承受我家业的是<span class="double-underline place">大马士革</span>人<u class="person underline">以利以谢</u>。&rdquo; <sup class="versenum">3&nbsp;</sup><u class="person underline">亚伯兰</u>又说：&ldquo;你没有给我儿子，那生在我家中的人就是我的后嗣。&rdquo; <sup class="versenum">4&nbsp;</sup>耶和华又有话对他说：&ldquo;这人必不成为你的后嗣，你本身所生的才成为你的后嗣。&rdquo; <sup class="versenum">5&nbsp;</sup>于是领他走到外边，说：&ldquo;你向天观看，数算众星，能数得过来吗？&rdquo;又对他说：&ldquo;你的后裔将要如此。&rdquo; <sup class="versenum">6&nbsp;</sup><u class="person underline">亚伯兰</u>信耶和华，耶和华就以此为他的义。</p>
</div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button2" type="button" class="collapsible bible">读两遍 创世记 22:1-19</button><div class="collapsed" id ="Text2">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>神试验亚伯拉罕</h3>

<p class="chapter-2"><sup class="versenum">1&nbsp;</sup>这些事以后，神要试验<u class="person underline">亚伯拉罕</u>，就呼叫他说：&ldquo;<u class="person underline">亚伯拉罕</u>！&rdquo;他说：&ldquo;我在这里。&rdquo; <sup class="versenum">2&nbsp;</sup>神说：&ldquo;你带着你的儿子，就是你独生的儿子，你所爱的<u class="person underline">以撒</u>，往<span class="double-underline place">摩利亚</span>地去，在我所要指示你的山上，把他献为燔祭。&rdquo; <sup class="versenum">3&nbsp;</sup><u class="person underline">亚伯拉罕</u>清早起来，备上驴，带着两个仆人和他儿子<u class="person underline">以撒</u>，也劈好了燔祭的柴，就起身往神所指示他的地方去了。 <sup class="versenum">4&nbsp;</sup>到了第三日，<u class="person underline">亚伯拉罕</u>举目远远地看见那地方。 <sup class="versenum">5&nbsp;</sup><u class="person underline">亚伯拉罕</u>对他的仆人说：&ldquo;你们和驴在此等候，我与童子往那里去拜一拜，就回到你们这里来。&rdquo; <sup class="versenum">6&nbsp;</sup><u class="person underline">亚伯拉罕</u>把燔祭的柴放在他儿子<u class="person underline">以撒</u>身上，自己手里拿着火与刀，于是二人同行。 <sup class="versenum">7&nbsp;</sup><u class="person underline">以撒</u>对他父亲<u class="person underline">亚伯拉罕</u>说：&ldquo;父亲哪！&rdquo;<u class="person underline">亚伯拉罕</u>说：&ldquo;我儿，我在这里。&rdquo;<u class="person underline">以撒</u>说：&ldquo;请看，火与柴都有了，但燔祭的羊羔在哪里呢？&rdquo; <sup class="versenum">8&nbsp;</sup><u class="person underline">亚伯拉罕</u>说：&ldquo;我儿，神必自己预备做燔祭的羊羔。&rdquo;于是二人同行。</p>

<p><sup class="versenum">9&nbsp;</sup>他们到了神所指示的地方，<u class="person underline">亚伯拉罕</u>在那里筑坛，把柴摆好，捆绑他的儿子<u class="person underline">以撒</u>，放在坛的柴上。 <sup class="versenum">10&nbsp;</sup><u class="person underline">亚伯拉罕</u>就伸手拿刀，要杀他的儿子。 <sup class="versenum">11&nbsp;</sup>耶和华的使者从天上呼叫他说：&ldquo;<u class="person underline">亚伯拉罕</u>！<u class="person underline">亚伯拉罕</u>！&rdquo;他说：&ldquo;我在这里。&rdquo; <sup class="versenum">12&nbsp;</sup>天使说：&ldquo;你不可在这童子身上下手，一点不可害他。现在我知道你是敬畏神的了，因为你没有将你的儿子，就是你独生的儿子，留下不给我。&rdquo; <sup class="versenum">13&nbsp;</sup><u class="person underline">亚伯拉罕</u>举目观看，不料，有一只公羊，两角扣在稠密的小树中。<u class="person underline">亚伯拉罕</u>就取了那只公羊来，献为燔祭，代替他的儿子。 <sup class="versenum">14&nbsp;</sup><u class="person underline">亚伯拉罕</u>给那地方起名叫<span class="double-underline place">耶和华以勒</span>，直到今日人还说：&ldquo;在耶和华的山上必有预备。&rdquo; <sup class="versenum">15&nbsp;</sup>耶和华的使者第二次从天上呼叫<u class="person underline">亚伯拉罕</u>说： <sup class="versenum">16&nbsp;</sup>&ldquo;耶和华说：&lsquo;你既行了这事，不留下你的儿子，就是你独生的儿子，我便指着自己起誓说： <sup class="versenum">17&nbsp;</sup>论福，我必赐大福给你；论子孙，我必叫你的子孙多起来，如同天上的星，海边的沙；你子孙必得着仇敌的城门； <sup class="versenum">18&nbsp;</sup>并且地上万国都必因你的后裔得福，因为你听从了我的话。&rsquo;&rdquo; <sup class="versenum">19&nbsp;</sup>于是<u class="person underline">亚伯拉罕</u>回到他仆人那里，他们一同起身往<span class="double-underline place">别是巴</span>去，<u class="person underline">亚伯拉罕</u>就住在<span class="double-underline place">别是巴</span>。</p>
<br />
<!--end of footnotes--></div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2>探索与讨论</h2>

<ul>
	<li>在这个故事中什么引起了你的注意?</li>
	<li>你认为这个故事的中心思想是什么？</li>
	<li>关于神我们学到了什么?</li>
	<li>关于人和神的关系我们学到了什么？</li>
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


<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" /></p>

<div class="lesson-subtitle"><span lang="ZH-CN"><span>向前看</span></span></div>
</div>

<h2>一起选择要顺服的地方</h2>

<ul>
	<li>我们怎样可以顺服这个教训?</li>
	<li>这个星期里有没有什么人需要我们实实在在服侍对方</li>
	<li>本周你可以和谁分享这个故事?</li>
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


<h2>定好一个时间聚会准备学习下一个故事</h2>

<ul>
	<li>下一个故事是关于先知摩西</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->