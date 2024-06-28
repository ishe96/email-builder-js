import { TEditorConfiguration } from '../../documents/editor/core';

const NEW_PRODUCT: TEditorConfiguration = {
    'root': {
      'type': 'EmailLayout',
      'data': {
        'backdropColor': '#F5F5F5',
        'canvasColor': '#FFFFFF',
        'textColor': '#2f2d2c',
        'fontFamily': 'MODERN_SANS',
        'childrenIds': [
          'block-1719569527080',
          'block-1719569535033',
          'block-1719569564240',
          'block-1719569544278',
          'block-1719569594714',
          'block-1719569601310',
          'block-1719569620906',
          'block-1719569664928',
          'block-1719569667465'
        ]
      }
    },
    'block-1719569527080': {
      'type': 'Heading',
      'data': {
        'props': {
          'text': 'Hello friend'
        },
        'style': {
          'padding': {
            'top': 16,
            'bottom': 16,
            'left': 24,
            'right': 24
          }
        }
      }
    },
    'block-1719569535033': {
      'type': 'Spacer',
      'data': {}
    },
    'block-1719569544278': {
      'type': 'Image',
      'data': {
        'props': {
          'url': 'https://assets.usewaypoint.com/sample-image.jpg',
          'alt': 'Sample product',
          'contentAlignment': 'middle',
          'linkHref': null
        },
        'style': {
          'padding': {
            'top': 16,
            'bottom': 16,
            'left': 24,
            'right': 24
          }
        }
      }
    },
    'block-1719569564240': {
      'type': 'Text',
      'data': {
        'style': {
          'fontWeight': 'normal',
          'padding': {
            'top': 16,
            'bottom': 16,
            'right': 24,
            'left': 24
          }
        },
        'props': {
          'text': 'Take a look at these new items.'
        }
      }
    },
    'block-1719569594714': {
      'type': 'Spacer',
      'data': {}
    },
    'block-1719569601310': {
      'type': 'Text',
      'data': {
        'style': {
          'fontWeight': 'normal',
          'padding': {
            'top': 16,
            'bottom': 16,
            'right': 24,
            'left': 24
          }
        },
        'props': {
          'text': 'Cool.'
        }
      }
    },
    'block-1719569620906': {
      'type': 'Button',
      'data': {
        'style': {
          'padding': {
            'top': 16,
            'bottom': 16,
            'right': 24,
            'left': 24
          }
        },
        'props': {
          'buttonBackgroundColor': '#0284C7',
          'text': 'Buy',
          'url': 'https://www.ebay.com'
        }
      }
    },
    'block-1719569664928': {
      'type': 'Spacer',
      'data': {}
    },
    'block-1719569667465': {
      'type': 'Html',
      'data': {
        'style': {
          'fontSize': 16,
          'textAlign': null,
          'padding': {
            'top': 16,
            'bottom': 16,
            'right': 24,
            'left': 24
          }
        },
        'props': {
          'contents': '<strong>Delete after you see this.<br/></br>Stay Anonymous...!!!</strong>'
        }
      }
    }
  };

export default NEW_PRODUCT;
