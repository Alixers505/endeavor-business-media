# Channel

To add a new channel, you can use the following code as a template, updating the sections within <@page> as needed.

Note: the loadMore skip setting will be specific to the number of content wells on that channel page, and their respective content limits.

```
import { getAsObject, getAsArray } from "@base-cms/object-path";
import { isFunction } from "@base-cms/utils";
import queryFragment from "@endeavor-business-media/package-shared/graphql/fragments/content-list";
import categories from "../../../categories";

$ const { id, alias, name, pageNode } = data;
$ const { GAM } = out.global;
$ const adSlots = isFunction(input.adSlots) ? input.adSlots : ({ aliases }) => ({
  "gpt-ad-lb1": GAM.getAdUnit({ name: "lb1", aliases }),
  "gpt-ad-rail2": GAM.getAdUnit({ name: "rail2", aliases }),
});

$ const loadMore = {
  queryParams: { limit: 14, skip: 9 },
  ...getAsObject(input, "loadMore"),
};

<shared-website-section-page-default-layout
  id=id
  alias=alias
  name=name
  page-node=pageNode
  ad-slots=adSlots
  load-more=loadMore
>
  <@page>
    <shared-gam-display-ad id="gpt-ad-lb1" modifiers=["top-of-page"] />

    <shared-content-hero-block id=id />

    <div class="row">
      <div class="col-lg-4 mb-block">
        <shared-website-section-list-block alias=alias>
          <@query-params limit=4 skip=5 />
          <@header>Latest</@header>
        </shared-website-section-list-block>
      </div>

      <div class="col-lg-4 mb-block">
        <shared-gam-display-ad id="gpt-ad-rail2" />
      </div>

      <div class="col-lg-4 mb-block">
        <directory-facets title="Product Guide" active-id=id facets=categories />
      </div>
    </div>

  </@page>
</shared-website-section-page-default-layout>
```