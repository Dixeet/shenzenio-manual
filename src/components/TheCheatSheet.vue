<template>
  <CardApp pre>
    <div class="--flex --flex-wrap --justify-between">
      <div class="">
        <div class="--mb-5">
          <div class="--font-size-4 --mb-2">Basic Instructions</div>
          <div class="--font-size-3 cheatsheet__commands-group">
            <div class=""><strong>nop</strong></div>
            <div class=""><strong >mov</strong>&nbsp;R/I&nbsp;R/I</div>
            <div class=""><strong >jmp</strong>&nbsp;L</div>
            <div class=""><strong >slp</strong>&nbsp;R/I</div>
            <div class=""><strong >slx</strong>&nbsp;P</div>
            <div>&nbsp;</div>
          </div>
        </div>
        <div class="--mb-5">
          <div class="--font-size-4 --mb-2">Test Instructions</div>
          <div class="--font-size-3 cheatsheet__commands-group">
            <div class=""><strong >teq</strong>&nbsp;R/I&nbsp;R/I</div>
            <div class=""><strong >tgt</strong>&nbsp;R/I&nbsp;R/I</div>
            <div class=""><strong >tlt</strong>&nbsp;R/I&nbsp;R/I</div>
            <div class=""><strong >tcp</strong>&nbsp;R/I&nbsp;R/I</div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="--mb-5">
          <div class="--font-size-4 --mb-2">Arithmetic Instructions</div>
          <div class="--font-size-3 cheatsheet__commands-group">
            <div class=""><strong>add</strong>&nbsp;R/I</div>
            <div class=""><strong>sub</strong>&nbsp;R/I</div>
            <div class=""><strong>mul</strong>&nbsp;R/I</div>
            <div class=""><strong>not</strong></div>
            <div class=""><strong>dgt</strong>&nbsp;R/I</div>
            <div class=""><strong>dst</strong>&nbsp;R/I&nbsp;R/I</div>
          </div>
        </div>
        <div class="--mb-5">
          <div class="--font-size-4 --mb-2">Registers</div>
          <div class="--font-size-3 cheatsheet__commands-group">
            <div class=""><strong>acc</strong></div>
            <div class=""><strong>dat <em class="--font-size-2 em--top-text">[1]</em></strong></div>
            <div class=""><strong>p0, p1 <em class="em--top-text --font-size-2">[1]</em></strong></div>
            <div class=""><strong>x0, x1, x2, x3 <em class="em--top-text --font-size-2">[1]</em></strong></div>
          </div>
        </div>
      </div>
    </div>
    <div class="--mt-5 --flex --justify-center">
      <table>
        <thead>
        <tr>
          <th>Notation</th>
          <th>Meaning</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>R</td>
          <td>Register</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Integer <em class="em--top-text --font-size-2">[2]</em></td>
        </tr>
        <tr>
          <td>R/I</td>
          <td>Register or integer <em class="em--top-text --font-size-2">[2]</em></td>
        </tr>
        <tr>
          <td>P</td>
          <td>Pin register (p0, p1, etc.)</td>
        </tr>
        <tr>
          <td>L</td>
          <td>Label <em class="em--top-text --font-size-2">[3]</em></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="--font-italic --font-size-3">
      <p >
        [1] Not all registers are available on all microcontrollers. Refer to the parts datasheets
        for pin diagrams and register information.
      </p>
      <p >
        [2] Integer values must be in the range -999 to 999.
      </p>
      <p >
        [3] Labels used as operands must be defined elsewhere in the program.
      </p>
    </div>
  </CardApp>
</template>

<script setup>
import CardApp from './CardApp.vue';

</script>

<style>
.cheatsheet__commands-group {
  line-height: 16px;
}
.em--top-text {
  vertical-align: top;
}
</style>