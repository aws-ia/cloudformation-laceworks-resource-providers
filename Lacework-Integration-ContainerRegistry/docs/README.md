# Lacework::Integration::ContainerRegistry

Add a container registry e.g. AWS's ECR

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Integration::ContainerRegistry",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Double</i>,
        "<a href="#data" title="Data">Data</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Integration::ContainerRegistry
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Double</i>
    <a href="#data" title="Data">Data</a>: <i>String</i>
</pre>

## Properties

#### Name

When sending a request, use this attribute to specify an integration's name. When included in a response, this attribute returns the specified integration's name.

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

When sending a request, use this attribute to specify the type of integration, from the following options. When included in a response, this attribute returns the specified integration's type.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>ContVulnCfg</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

When sending a request, use this attribute to enable or disable an integration. When included in a response, returns 1 for an enabled integration or 0 for a disabled integration

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Data

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the IntgGuid.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### IntgGuid

The integration's globally unique identifier.

#### CreatedOrUpdatedTime

The timestamp for when the alert channel was created or last updated.

