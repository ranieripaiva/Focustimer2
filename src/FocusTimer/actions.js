import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()    
}

export function setPlus() {    
    if(state.isRunning != true){
        el.minutes.setAttribute('contenteditable', true)        
        el.minutes.textContent++    
        
    }    
}


export function setMinus() {
    if(state.isRunning != true){
        el.minutes.setAttribute('contenteditable', true)
        el.minutes.textContent--    
    } 
}


export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()        
        return
    }
    sounds.bgAudio.pause()    
}

export function toggleSoundsFloresta(){
    sounds.bgChuva.pause()
    sounds.bgLareira.pause()
    sounds.bgCafeteria.pause()
    sounds.bgFloresta.play()    
}

export function toggleSoundsChuva(){
    sounds.bgLareira.pause()
    sounds.bgCafeteria.pause()
    sounds.bgFloresta.pause()    
    sounds.bgChuva.play()    
}

export function toggleSoundsCafeteria(){
    sounds.bgLareira.pause()
    sounds.bgCafeteria.play()
    sounds.bgFloresta.pause()    
    sounds.bgChuva.pause()      
}

export function toggleSoundsLareira(){
    sounds.bgLareira.play()
    sounds.bgCafeteria.pause()
    sounds.bgFloresta.pause()    
    sounds.bgChuva.pause()       
}