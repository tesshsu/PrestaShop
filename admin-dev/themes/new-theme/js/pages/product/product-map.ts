/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

const combinationListId = '#combination_list';
const attachmentsBlockId = '#product_specifications_attachments';

export default {
  productForm: 'form[name=product]',
  productTypeSelector: '#product_header_type',
  productType: {
    STANDARD: 'standard',
    PACK: 'pack',
    VIRTUAL: 'virtual',
    COMBINATIONS: 'combinations',
  },
  create: {
    newProductButton: 'a.new-product',
    productTypeSelector: {
      select: '#product_type',
      choicesContainer: '.product-type-choices',
      typeChoices: '.product-type-choice',
      defaultChoiceClass: 'btn-outline-secondary',
      selectedChoiceClass: 'btn-primary',
      typeDescription: '.product-type-description-content',
    },
  },
  invalidField: '.is-invalid',
  productFormSubmitButton: '.product-form-save-button',
  navigationBar: '#form-nav',
  dropzoneImagesContainer: '.product-image-dropzone',
  featureValues: {
    collectionContainer: '.feature-values-collection',
    collectionRowsContainer: '.feature-values-collection > .col-sm',
    collectionRow: 'div.product-feature',
    featureSelect: 'select.feature-selector',
    featureValueSelect: 'select.feature-value-selector',
    customValueInput: '.custom-values input',
    customFeatureIdInput: 'input.custom-value-id',
    deleteFeatureValue: 'button.delete-feature-value',
    addFeatureValue: '.feature-value-add-button',
  },
  customizations: {
    customizationsContainer: '.product-customizations-collection',
    customizationFieldsList: '.product-customizations-collection ul',
    addCustomizationBtn: '.add-customization-btn',
    removeCustomizationBtn: '.remove-customization-btn',
    customizationFieldRow: '.customization-field-row',
  },
  combinations: {
    navigationTab: '#combinations-tab-nav',
    externalCombinationTab: '#external-combination-tab',
    preloader: '#combinations-preloader',
    emptyState: '#combinations-empty-state',
    combinationsPaginatedList: '#combinations-paginated-list',
    combinationsContainer: `${combinationListId}`,
    combinationsFiltersContainer: '#combinations_filters',
    combinationsGeneratorContainer: '#product_combinations_generator',
    combinationsTable: `${combinationListId} table`,
    combinationsTableBody: `${combinationListId} table tbody`,
    combinationIdInputsSelector: '.combination-id-input',
    isDefaultInputsSelector: '.combination-is-default-input',
    deleteCombinationSelector: '.delete-combination-item',
    combinationName: 'form .card-header span',
    paginationContainer: '#combinations-pagination',
    loadingSpinner: '#productCombinationsLoading',
    impactOnPriceInputWrapper: '.combination-impact-on-price',
    referenceInputWrapper: '.combination-reference',
    sortableColumns: '.ps-sortable-column',
    combinationItemForm: {
      isDefaultKey: 'combination_item[is_default]',
      deltaQuantityKey: 'combination_item[delta_quantity][delta]',
      impactOnPriceKey: 'combination_item[impact_on_price][value]',
      referenceKey: 'combination_item[reference][value]',
      tokenKey: 'combination_item[_token]',
    },
    editionForm: 'form[name="combination_form"]',
    editionFormInputs:
      // eslint-disable-next-line
      'form[name="combination_form"] input, form[name="combination_form"] textarea, form[name="combination_form"] select',
    editCombinationButtons: '.edit-combination-item',
    tableRow: {
      combinationImg: '.combination-image',
      deltaQuantityWrapper: '.delta-quantity',
      deltaQuantityInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_delta_quantity_delta`,
      combinationCheckbox: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_is_selected`,
      combinationIdInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_combination_id`,
      combinationNameInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_name`,
      referenceInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_reference_value`,
      impactOnPriceInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_impact_on_price_value`,
      finalPriceTeInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_final_price_te`,
      quantityInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_delta_quantity_quantity`,
      isDefaultInput: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_is_default`,
      editButton: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_edit`,
      deleteButton: (rowIndex: number): string => `${combinationListId}_combinations_${rowIndex}_delete`,
    },
    editModal: '#combination-edit-modal',
    images: {
      selectorContainer: '.combination-images-selector',
      imageChoice: '.combination-image-choice',
      checkboxContainer: '.form-check',
      checkbox: 'input[type=checkbox]',
    },
    scrollBar: '.attributes-list-overflow',
    searchInput: '#product-combinations-generate .attributes-search',
    generateCombinationsButton: '.generate-combinations-button',
  },
  virtualProduct: {
    container: '.virtual-product-file-container',
    fileContentContainer: '.virtual-product-file-content',
  },
  dropzone: {
    configuration: {
      fileManager: '.openfilemanager',
    },
    photoswipe: {
      element: '.pswp',
    },
    dzTemplate: '.dz-template',
    dzPreview: '.dz-preview',
    sortableContainer: '#product-images-dropzone',
    sortableItems: 'div.dz-preview:not(.disabled)',
    dropzoneContainer: '.dropzone-container',
    checkbox: '.md-checkbox input',
    shownTooltips: '.tooltip.show',
    savedImageContainer: (imageId: string): string => `.dz-preview[data-id="${imageId}"]`,
    savedImage: (imageId: string): string => `.dz-preview[data-id="${imageId}"] img`,
    coveredPreview: '.dz-preview.is-cover',
    windowFileManager: '.dropzone-window-filemanager',
  },
  suppliers: {
    productSuppliers: '#product_options_suppliers',
    combinationSuppliers: '#combination_form_suppliers',
  },
  seo: {
    container: '#product_seo_serp',
    defaultTitle: '.serp-default-title:input',
    watchedTitle: '.serp-watched-title:input',
    defaultDescription: '.serp-default-description',
    watchedDescription: '.serp-watched-description',
    watchedMetaUrl: '.serp-watched-url:input',
    redirectOption: {
      typeInput: '#product_seo_redirect_option_type',
      targetInput: '#product_seo_redirect_option_target',
      groupSelector: '.form-group',
      labelSelector: 'label',
      helpSelector: 'small.form-text',
    },
  },
  jsTabs: '.js-tabs',
  jsArrow: '.js-arrow',
  jsNavTabs: '.js-nav-tabs',
  toggleTab: '[data-toggle="tab"]',
  formContentTab: '#form_content > .form-contenttab',
  leftArrow: '.left-arrow',
  rightArrow: '.right-arrow',
  footer: {
    previewUrlButton: '.preview-url-button',
    deleteProductButton: '.delete-product-button',
  },
  categories: {
    categoriesContainer: '#product_description_categories',
    categoriesModalTemplate: '#categories-modal-template',
    modalContentContainer: '#categories-modal-content',
    categoriesModalId: 'categories-modal',
    applyCategoriesBtn: '.js-apply-categories-btn',
    cancelCategoriesBtn: '.js-cancel-categories-btn',
    categoryTree: '.js-category-tree-list',
    treeElement: '.category-tree-element',
    treeElementInputs: '.category-tree-inputs',
    treeCheckboxInput: '.tree-checkbox-input',
    checkboxInput: '[type=checkbox]',
    checkedCheckboxInputs: '[type=checkbox]:checked',
    // eslint-disable-next-line
    checkboxName: (categoryId: string): string => `product[description][categories][product_categories][${categoryId}][is_associated]`,
    inputByValue: (value: number): string => `input[value="${value}"]`,
    defaultCategorySelectInput: '#product_description_categories_default_category_id',
    materialCheckbox: '.md-checkbox',
    radioInput: '[type=radio]',
    defaultRadioInput: '[type=radio]:checked',
    radioName: (categoryId: string): string => `product[description][categories][product_categories][${categoryId}][is_default]`,
    tagsContainer: '.pstaggerTagsWrapper',
    tagRemoveBtn: '.pstaggerClosingCross',
    tagCategoryIdInput: '.category-id-input',
    tagItem: '.tag-item',
    categoryNamePreview: '.category-name-preview',
    categoryNameInput: '.category-name-input',
    searchInput: '#ps-select-product-category',
    fieldset: '.tree-fieldset',
    loader: '.categories-tree-loader',
    childrenList: '.children-list',
    everyItems: '.less, .more',
    addCategoriesBtn: '.add-categories-btn',
    expandAllButton: '#categories-tree-expand',
    reduceAllButton: '#categories-tree-reduce',
  },
  modules: {
    previewContainer: '.module-render-container.all-modules',
    previewButton: '.modules-list-button',
    selectorContainer: '.module-selection',
    moduleSelector: '.modules-list-select',
    selectorPreviews: '.module-selection .module-render-container',
    selectorPreview: (moduleId: string): string => `.module-selection .module-render-container.${moduleId}`,
    contentContainer: '.module-contents',
    moduleContents: '.module-contents .module-render-container',
    moduleContent: (moduleId: string): string => `.module-contents .module-render-container.${moduleId}`,
  },
  attachments: {
    attachmentsContainer: attachmentsBlockId,
    searchAttributeInput: `${attachmentsBlockId}_attached_files`,
    addAttachmentBtn: '.add-attachment',
  },
  relatedProducts: {
    searchInput: '#product_description_related_products',
  },
  specificPrice: {
    container: '#specific-prices-container',
    modalTemplate: '#specific-price-modal-template',
    modalContentId: 'specific-price-modal',
    addSpecificPriceBtn: '.js-add-specific-price-btn',
    formModal: '#specific-price-form-modal',
    form: 'form[name="specific_price"]',
    listContainer: '#specific-price-list-container',
    listRowTemplate: '#specific-price-tr-template',
    listFields: {
      specificPriceId: '.specific-price-id',
      combination: '.combination',
      currency: '.currency',
      country: '.country',
      group: '.group',
      customer: '.customer',
      price: '.price',
      impact: '.impact',
      period: '.period',
      from: '.period .from',
      to: '.period .to',
      fromQuantity: '.from-qty',
      editBtn: '.js-edit-specific-price-btn',
      deleteBtn: '.js-delete-specific-price-btn',
    },
  },
};