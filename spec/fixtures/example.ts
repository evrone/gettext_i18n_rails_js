function pepito() {
  const string = "this" + __('json') + 'should be translated';
  alert(n__('item', 'items', 3));
}

example_template(__('Hello {yourname}'), { yourname: 'bob' });

object = {
  one: N__('new-trans'),
  two: s__('namespaced', 'trans'),
  three: __("Hello\nBuddy"),
  four: __('test uniq script')
};