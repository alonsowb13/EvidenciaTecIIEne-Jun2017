<<<<<<< HEAD

        const inputs = document.querySelectorAll('.container input');
        
        inputs.forEach(input =>input.addEventListener('change',Actualizacion));
        inputs.forEach(input =>input.addEventListener('mousemove',Actualizacion));
        
        function Actualizacion(){
            const value = this.value;
            const sizing = this.dataset.sizing||'';
            document.documentElement.style.setProperty(`--${this.name}`,value+sizing);
        }
=======

        const inputs = document.querySelectorAll('.container input');
        
        inputs.forEach(input =>input.addEventListener('change',Actualizacion));
        inputs.forEach(input =>input.addEventListener('mousemove',Actualizacion));
        
        function Actualizacion(){
            const value = this.value;
            const sizing = this.dataset.sizing||'';
            document.documentElement.style.setProperty(`--${this.name}`,value+sizing);
        }
>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
        