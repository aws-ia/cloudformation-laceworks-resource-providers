# Lacework::Alerts::Rule Filters

When sending a request, use this object to define the new alert rule. When included in a response, this object contains details of an alert rule. You can use these attributes when searching for existing alert rules by invoking a GET request.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Double</i>,
    "<a href="#resourcegroups" title="ResourceGroups">ResourceGroups</a>" : <i>[ String, ... ]</i>,
    "<a href="#eventcategory" title="EventCategory">EventCategory</a>" : <i>[ String, ... ]</i>,
    "<a href="#severity" title="Severity">Severity</a>" : <i>[ Double, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Double</i>
<a href="#resourcegroups" title="ResourceGroups">ResourceGroups</a>: <i>
      - String</i>
<a href="#eventcategory" title="EventCategory">EventCategory</a>: <i>
      - String</i>
<a href="#severity" title="Severity">Severity</a>: <i>
      - Double</i>
</pre>

## Properties

#### Name

The alert rule's name.

_Required_: No

_Type_: String

_Minimum Length_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Summary of the alert rule.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

When sending a request, use this attribute to enable or disable an alert rule. When included in a response, returns `1` for enabled alert rules, or returns `0` for disabled alert rules.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ResourceGroups

The resource groups that you want the rule to apply to.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EventCategory

The event categories that you want the rule to apply to.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Severity

The severity levels that you want the rule to apply to, where 1 = Critical, 2 = High, 3 = Medium, 4 = Low, and 5 = Info.

_Required_: No

_Type_: List of Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

