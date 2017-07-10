import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import First from '../components/First.vue'
import Second from '../components/Second.vue'

import PhraseReading from '../components/paraphrase/Reading.vue'
import PhraseReadingTask from '../components/paraphrase/Task.vue'
import PhraseReadingResult from '../components/paraphrase/Result.vue'

import PhraseClicking from '../components/paraphrase/Clicking.vue'
import PhraseClickingTask from '../components/paraphrase/ClickingTask.vue'
import PhraseClickingResult from '../components/paraphrase/ClickingResult.vue'

import SorobanReading from '../components/soroban/reading/Main.vue'
import SorobanReadingTask from '../components/soroban/reading/Task.vue'
import SorobanReadingResult from '../components/soroban/reading/Result.vue'

import SorobanWriting from '../components/soroban/writing/Main.vue'
import SorobanWritingTask from '../components/soroban/writing/Task.vue'
import SorobanWritingResult from '../components/soroban/writing/Result.vue'

import Arithmetic from '../components/arithmetic/Main.vue'
import ArithmeticTask from '../components/arithmetic/Task.vue'
import ArithmeticResult from '../components/arithmetic/Result.vue'

import AnzanFlash from '../components/anzan/flash/Main.vue'
import AnzanFlashTask from '../components/anzan/flash/Task.vue'
import AnzanFlashResult from '../components/anzan/flash/Result.vue'

import AnzanAudio from '../components/anzan/audio/Main.vue'
import AnzanAudioTask from '../components/anzan/audio/Task.vue'
import AnzanAudioResult from '../components/anzan/audio/Result.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: Second
        },
        {
            path:'/paraphrase/reading',
            component: PhraseReading
        },
        {
            path: '/paraphrase/reading/task',
            component: PhraseReadingTask
        },
        {
            path: '/paraphrase/reading/result',
            component: PhraseReadingResult
        },
        {
            path: '/paraphrase/clicking',
            component: PhraseClicking
        },
        {
            path: '/paraphrase/clicking/task',
            component: PhraseClickingTask
        },
        {
            path: '/paraphrase/clicking/result',
            component: PhraseClickingResult
        },
        {
            path: '/soroban/reading',
            component: SorobanReading
        },
        {
            path: '/soroban/reading/task',
            component: SorobanReadingTask
        },
        {
            path: '/soroban/reading/result',
            component: SorobanReadingResult
        },
        {
            path: '/soroban/writing',
            component: SorobanWriting
        },
        {
            path: '/soroban/writing/task',
            component: SorobanWritingTask
        },
        {
            path: '/soroban/writing/result',
            component: SorobanWritingResult
        },
        {
            path: '/arithmetic',
            component: Arithmetic
        },
        {
            path: '/arithmetic/task',
            component: ArithmeticTask
        },
        {
            path: '/arithmetic/result',
            component: ArithmeticResult
        },
        {
            path: '/anzan/flash',
            component: AnzanFlash
        },
        {
            path: '/anzan/flash/task',
            component: AnzanFlashTask
        },
        {
            path: '/anzan/flash/result',
            component: AnzanFlashResult
        },
        {
            path: '/anzan/audio',
            component: AnzanAudio
        },
        {
            path: '/anzan/audio/task',
            component: AnzanAudioTask
        },
        {
            path: '/anzan/audio/result',
            component: AnzanAudioResult
        }
    ]
});

export default router