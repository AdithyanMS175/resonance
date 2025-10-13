  const images = document.querySelectorAll('#carousel img');
    const buttons = document.querySelectorAll('.color-btn');
    let activeIndex = 1;

    function updateCarousel(newIndex) {


        images.forEach((img, i) => {
            img.classList.remove('w-[500px]', 'h-[500px]', 'z-10', 'opacity-100', 'blur-0')
            img.classList.add('w-64', 'h-64', 'opacity-50', 'blur-sm');

            if (i === newIndex) {
                img.classList.remove('w-64', 'h-64', 'opacity-50', 'blur-sm');
                img.classList.add('w-[500px]', 'h-[500px]', 'z-10', 'opacity-100', 'blur-0','float');
            }

        })

        buttons.forEach((btn, i) => {
            btn.classList.remove('border-gray-600');
            btn.classList.add('border-transparent');

            if (i === newIndex) {
                btn.classList.remove('border-transparent');
                btn.classList.add('border-gray-600');
            }
 
        })

        activeIndex = newIndex;

    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index'));
            updateCarousel(index);
        });
    })


 function changeImg(num) {
        var img = document.getElementById('theimg');


        if (num === 1) {
            img.src = "./assets/headphones(yellow).png"
        } else if (num === 2) {
            img.src = "./assets/headphones(green).png"
        } else if (num === 3) {
            img.src = "./assets/headphones(red).png"
        }

    }






