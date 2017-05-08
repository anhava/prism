module.exports = {
	'<div><?php echo $foo; ?></div>': '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$foo</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',
	'<div><? echo $foo; ?></div>': '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token php language-php"><span class="token delimiter important">&lt;?</span> <span class="token keyword">echo</span> <span class="token variable">$foo</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',
	'<div class="<?php echo $foo; ?>">': '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$foo</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',
	'<div class="<? echo $foo; ?>">': '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token php language-php"><span class="token delimiter important">&lt;?</span> <span class="token keyword">echo</span> <span class="token variable">$foo</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',
	'<div><?= $foo; ?></div>': '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$foo</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'
};