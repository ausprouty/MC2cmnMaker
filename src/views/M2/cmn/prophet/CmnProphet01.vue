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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>先知亚当</h1></div>
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

<p>读出经文创世记2:15-3:21两遍，其他人静听</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 创世记 2:15-3:21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<p><sup class="versenum">15&nbsp;</sup>耶和华神将那人安置在<span class="double-underline place">伊甸</span>园，使他修理看守。 <sup class="versenum">16&nbsp;</sup>耶和华神吩咐他说：&ldquo;园中各样树上的果子，你可以随意吃； <sup class="versenum">17&nbsp;</sup>只是分别善恶树上的果子，你不可吃，因为你吃的日子必定死。&rdquo;</p>

<h3>为男人造配偶</h3>

<p><sup class="versenum">18&nbsp;</sup>耶和华神说：&ldquo;那人独居不好，我要为他造一个配偶帮助他。&rdquo; <sup class="versenum">19&nbsp;</sup>耶和华神用土所造成的野地各样走兽和空中各样飞鸟都带到那人面前，看他叫什么。那人怎样叫各样的活物，那就是它的名字。 <sup class="versenum">20&nbsp;</sup>那人便给一切牲畜和空中飞鸟、野地走兽都起了名，只是那人没有遇见配偶帮助他。 <sup class="versenum">21&nbsp;</sup>耶和华神使他沉睡，他就睡了。于是取下他的一条肋骨，又把肉合起来。 <sup class="versenum">22&nbsp;</sup>耶和华神就用那人身上所取的肋骨造成一个女人，领她到那人跟前。 <sup class="versenum">23&nbsp;</sup>那人说：&ldquo;这是我骨中的骨、肉中的肉！可以称她为女人，因为她是从男人身上取出来的。&rdquo; <sup class="versenum">24&nbsp;</sup>因此，人要离开父母，与妻子联合，二人成为一体。 <sup class="versenum">25&nbsp;</sup>当时夫妻二人赤身露体，并不羞耻。</p>

<h3>始祖被诱惑</h3>

<p class="chapter-1"><span class="chapternum">3&nbsp;</span>耶和华神所造的，唯有蛇比田野一切的活物更狡猾。蛇对女人说：&ldquo;神岂是真说，不许你们吃园中所有树上的果子吗？&rdquo; <sup class="versenum">2&nbsp;</sup>女人对蛇说：&ldquo;园中树上的果子我们可以吃， <sup class="versenum">3&nbsp;</sup>唯有园当中那棵树上的果子，神曾说：&lsquo;你们不可吃，也不可摸，免得你们死。&rsquo;&rdquo; <sup class="versenum">4&nbsp;</sup>蛇对女人说：&ldquo;你们不一定死！ <sup class="versenum">5&nbsp;</sup>因为神知道你们吃的日子眼睛就明亮了，你们便如神能知道善恶。&rdquo;</p>

<h3>违背主命</h3>

<p><sup class="versenum">6&nbsp;</sup>于是女人见那棵树的果子好做食物，也悦人的眼目，且是可喜爱的，能使人有智慧，就摘下果子来吃了；又给她丈夫，她丈夫也吃了。 <sup class="versenum">7&nbsp;</sup>他们二人的眼睛就明亮了，才知道自己是赤身露体，便拿无花果树的叶子，为自己编做裙子。 <sup class="versenum">8&nbsp;</sup>天起了凉风，耶和华神在园中行走，那人和他妻子听见神的声音，就藏在园里的树木中，躲避耶和华神的面。 <sup class="versenum">9&nbsp;</sup>耶和华神呼唤那人，对他说：&ldquo;你在哪里？&rdquo; <sup class="versenum">10&nbsp;</sup>他说：&ldquo;我在园中听见你的声音，我就害怕，因为我赤身露体。我便藏了。&rdquo; <sup class="versenum">11&nbsp;</sup>耶和华说：&ldquo;谁告诉你赤身露体呢？莫非你吃了我吩咐你不可吃的那树上的果子吗？&rdquo; <sup class="versenum">12&nbsp;</sup>那人说：&ldquo;你所赐给我与我同居的女人，她把那树上的果子给我，我就吃了。&rdquo; <sup class="versenum">13&nbsp;</sup>耶和华神对女人说：&ldquo;你做的是什么事呢？&rdquo;女人说：&ldquo;那蛇引诱我，我就吃了。&rdquo; <sup class="versenum">14&nbsp;</sup>耶和华神对蛇说：&ldquo;你既做了这事，就必受咒诅，比一切的牲畜野兽更甚！你必用肚子行走，终身吃土。 <sup class="versenum">15&nbsp;</sup>我又要叫你和女人彼此为仇，你的后裔和女人的后裔也彼此为仇，女人的后裔要伤你的头，你要伤他的脚跟。&rdquo; <sup class="versenum">16&nbsp;</sup>又对女人说：&ldquo;我必多多加增你怀胎的苦楚，你生产儿女必多受苦楚。你必恋慕你丈夫，你丈夫必管辖你。&rdquo; <sup class="versenum">17&nbsp;</sup>又对<u class="person underline">亚当</u>说：&ldquo;你既听从妻子的话，吃了我所吩咐你不可吃的那树上的果子，地必为你的缘故受咒诅，你必终身劳苦，才能从地里得吃的。 <sup class="versenum">18&nbsp;</sup>地必给你长出荆棘和蒺藜来，你也要吃田间的菜蔬。 <sup class="versenum">19&nbsp;</sup>你必汗流满面才得糊口，直到你归了土，因为你是从土而出的。你本是尘土，仍要归于尘土。&rdquo; <sup class="versenum">20&nbsp;</sup><u class="person underline">亚当</u>给他妻子起名叫<u class="person underline">夏娃</u>，因为她是众生之母。 <sup class="versenum">21&nbsp;</sup>耶和华神为<u class="person underline">亚当</u>和他妻子用皮子做衣服给他们穿。</p>
</div>
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
	<li>关于神我们学到了什么</li>
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
	<li>下一个故事是关于先知诺亚</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->