import { DirectiveBinding } from "vue";
import { Popover } from "bootstrap";

export default {
    mounted: function(el: HTMLElement, binding: DirectiveBinding) {
        let placement: Popover.Options['placement'] = 'auto';
        let trigger: string[] = [];

        if (binding.modifiers.left) {
            placement = 'left';
        } else if (binding.modifiers.right) {
            placement = 'right';
        } else if (binding.modifiers.bottom) {
            placement = 'bottom';
        } else if(binding.modifiers.top) {
            placement = 'top'
        }

        if (binding.modifiers.manual) {
            trigger.push('manual')
        } else {
            if (binding.modifiers.click) {
                trigger.push('click');
            }
    
            if (binding.modifiers.hover) {
                trigger.push('hover')
            }
    
            if (binding.modifiers.focus) {
                trigger.push('focus')
            }
        }
        
        el.setAttribute('data-bs-toggle', 'popover');
        
        new Popover(el, {
            trigger: trigger.length === 0 ? 'click' : trigger.join(' ') as Popover.Options['trigger'],
            placement,
            content: binding.value,
        });
    }
}