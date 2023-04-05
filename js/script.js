const allFaq = document.querySelectorAll('.all-faq .single-faq');

allFaq.forEach(singleFaq=>{
	singleFaq.querySelector('.title-box a').addEventListener('click', function(f){
		f.preventDefault();
		singleFaq.classList.toggle('active');
	})
})