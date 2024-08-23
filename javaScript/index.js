

  function handleAccordionToggle(buttons, isSubAccordion) {
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        buttons.forEach(function(btn) {
          if (btn !== button) {
            btn.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
          }
        });


        if (!isActive) {
          this.classList.add('active');
          content.style.display = 'block';
        } else {
          this.classList.remove('active');
          content.style.display = 'none';
        }
      });
    });
  }

  const accordions = document.querySelectorAll('.accordion-button');
  handleAccordionToggle(accordions, false);


  const subAccordions = document.querySelectorAll('.accordion-sub-button');
  handleAccordionToggle(subAccordions, true);

  const levelThree = document.querySelectorAll('.level_three')
  handleAccordionToggle(levelThree, true);


